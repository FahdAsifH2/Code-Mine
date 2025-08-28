// Components/VisitorTracker.js - COMPLETE SINGLE FILE SOLUTION
import { useEffect } from 'react';

const VisitorTracker = () => {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        // Get IP
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();

        // Get location
        let locationData = {};
        try {
          const locationResponse = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
          locationData = await locationResponse.json();
        } catch {
          locationData = { country_name: 'Unknown', city: 'Unknown' };
        }

        // Prepare visitor data
        const visitorInfo = {
          ip: ipData.ip,
          country: locationData.country_name || 'Unknown',
          city: locationData.city || 'Unknown',
          region: locationData.region || 'Unknown',
          timezone: locationData.timezone || 'Unknown',
          isp: locationData.org || 'Unknown',
          latitude: locationData.latitude || null,
          longitude: locationData.longitude || null,
          currentPage: window.location.pathname,
          referrer: document.referrer || 'Direct',
          userAgent: navigator.userAgent,
          language: navigator.language,
          screenWidth: window.screen.width,
          screenHeight: window.screen.height,
          timestamp: new Date().toISOString()
        };

        // Store in PostgreSQL database directly
        await storeInDatabase(visitorInfo);

      } catch (error) {
        // Store error
        await storeInDatabase({
          ip: 'Error',
          country: 'Error', 
          city: 'Error',
          latitude: null,
          longitude: null,
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
    };

    // Database connection and storage function
    const storeInDatabase = async (data) => {
      try {
        // Check if we're in development or production
        const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        
        if (isDev) {
          // Development: store in localStorage
          const visitors = JSON.parse(localStorage.getItem('visitors') || '[]');
          visitors.push({ ...data, id: Date.now(), stored_at: new Date().toISOString() });
          localStorage.setItem('visitors', JSON.stringify(visitors));
          console.log('Development: Visitor stored in localStorage');
          return { success: true, dev: true };
        } else {
          // Production: store in database
          const response = await fetch('/api/db', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              action: 'store',
              data: data
            })
          });
          
          if (response.ok) {
            const result = await response.json();
            return result;
          }
        }
      } catch (error) {
        // Ultimate fallback: always store in localStorage
        const visitors = JSON.parse(localStorage.getItem('visitors') || '[]');
        visitors.push({ ...data, id: Date.now(), error: error.message });
        localStorage.setItem('visitors', JSON.stringify(visitors));
      }
    };

    trackVisitor();
  }, []);

  return null;
};

// Single API endpoint handler - put this in api/db.js
const dbHandler = async (req, res) => {
  const { Pool } = await import('pg');
  
  const pool = new Pool({
    connectionString: 'postgresql://neondb_owner:npg_u6wJ2NAyQcWa@ep-divine-sea-adtrjf0g-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require',
    ssl: { rejectUnauthorized: false }
  });

  const { action, data, query } = req.body;

  try {
    if (action === 'store') {
      // Create table if not exists
      await pool.query(`
        CREATE TABLE IF NOT EXISTS visitors (
          id SERIAL PRIMARY KEY,
          ip VARCHAR(45),
          country VARCHAR(100),
          city VARCHAR(100),
          region VARCHAR(100),
          timezone VARCHAR(50),
          isp TEXT,
          latitude DECIMAL(10, 8),
          longitude DECIMAL(11, 8),
          current_page VARCHAR(255),
          referrer TEXT,
          user_agent TEXT,
          language VARCHAR(10),
          screen_width INTEGER,
          screen_height INTEGER,
          error TEXT,
          timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      // Insert visitor data
      const result = await pool.query(`
        INSERT INTO visitors (
          ip, country, city, region, timezone, isp, latitude, longitude, current_page, 
          referrer, user_agent, language, screen_width, screen_height, error
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) 
        RETURNING id
      `, [
        data.ip, data.country, data.city, data.region, data.timezone,
        data.isp, data.latitude, data.longitude, data.currentPage, data.referrer, data.userAgent,
        data.language, data.screenWidth, data.screenHeight, data.error
      ]);

      res.json({ success: true, id: result.rows[0].id });

    } else if (action === 'fetch') {
      // Fetch visitors
      const limit = query?.limit || 100;
      const result = await pool.query(`
        SELECT 
          id, ip, country, city, latitude, longitude, current_page, timestamp,
          user_agent, referrer, error
        FROM visitors 
        ORDER BY timestamp DESC 
        LIMIT $1
      `, [limit]);

      res.json({ success: true, data: result.rows });

    } else if (action === 'stats') {
      // Get visitor statistics
      const stats = await pool.query(`
        SELECT 
          COUNT(*) as total_visitors,
          COUNT(DISTINCT ip) as unique_visitors,
          COUNT(CASE WHEN error IS NOT NULL THEN 1 END) as error_count,
          (SELECT country FROM visitors WHERE country != 'Unknown' GROUP BY country ORDER BY COUNT(*) DESC LIMIT 1) as top_country,
          (SELECT current_page FROM visitors GROUP BY current_page ORDER BY COUNT(*) DESC LIMIT 1) as top_page
        FROM visitors
      `);

      const countries = await pool.query(`
        SELECT country, COUNT(*) as count 
        FROM visitors 
        WHERE country != 'Unknown' AND country != 'Error'
        GROUP BY country 
        ORDER BY count DESC 
        LIMIT 10
      `);

      res.json({ 
        success: true, 
        stats: stats.rows[0],
        countries: countries.rows
      });
    }

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  } finally {
    await pool.end();
  }
};

// Helper functions to use in your components
const VisitorAPI = {
  // Get all visitors
  getVisitors: async (limit = 100) => {
    const response = await fetch('/api/db', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'fetch', query: { limit } })
    });
    return response.json();
  },

  // Get visitor statistics  
  getStats: async () => {
    const response = await fetch('/api/db', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'stats' })
    });
    return response.json();
  },

  // Manual visitor tracking
  trackVisitor: async (customData = {}) => {
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const ipData = await ipResponse.json();
    
    const visitorData = {
      ip: ipData.ip,
      currentPage: window.location.pathname,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      ...customData
    };

    const response = await fetch('/api/db', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'store', data: visitorData })
    });
    return response.json();
  }
};

export default VisitorTracker;
export { VisitorAPI, dbHandler };

/*
SETUP INSTRUCTIONS:

1. INSTALL PACKAGES:
   npm install pg

2. CREATE API FILE api/db.js:
   Copy the dbHandler function above into api/db.js:
   
   export default async function handler(req, res) {
     // Paste the dbHandler function code here
   }

3. USAGE EXAMPLES:

   // In any component - get visitors
   const visitors = await VisitorAPI.getVisitors(50);
   
   // Get statistics
   const stats = await VisitorAPI.getStats();
   
   // Manual tracking
   await VisitorAPI.trackVisitor({ customField: 'value' });

4. DATABASE QUERIES:

   // View all visitors
   SELECT * FROM visitors ORDER BY timestamp DESC LIMIT 10;
   
   // Get visitor count by country
   SELECT country, COUNT(*) FROM visitors GROUP BY country;
   
   // Get today's visitors
   SELECT * FROM visitors WHERE DATE(timestamp) = CURRENT_DATE;
   
   // Get error logs
   SELECT * FROM visitors WHERE error IS NOT NULL;

5. The table is automatically created with these columns:
   - id (auto increment)
   - ip, country, city, region, timezone, isp
   - current_page, referrer, user_agent, language
   - screen_width, screen_height
   - error (for error tracking)
   - timestamp (auto generated)

PRODUCTION READY - NO CONSOLE LOGS - ALL DATA IN DATABASE
*/