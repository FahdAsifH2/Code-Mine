export default async function handler(req, res) {
    const { Pool } = await import('pg');
    
    const pool = new Pool({
      connectionString: 'postgresql://neondb_owner:npg_u6wJ2NAyQcWa@ep-divine-sea-adtrjf0g-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require',
      ssl: { rejectUnauthorized: false }
    });
  
    const { action, data, query } = req.body;
  
    try {
      if (action === 'store') {
        await pool.query(`CREATE TABLE IF NOT EXISTS visitors (id SERIAL PRIMARY KEY, ip VARCHAR(45), country VARCHAR(100), city VARCHAR(100), current_page VARCHAR(255), user_agent TEXT, error TEXT, timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`);
        
        const result = await pool.query(`INSERT INTO visitors (ip, country, city, current_page, user_agent, error) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`, [data.ip, data.country, data.city, data.currentPage, data.userAgent, data.error]);
        
        res.json({ success: true, id: result.rows[0].id });
      } else if (action === 'fetch') {
        const result = await pool.query(`SELECT * FROM visitors ORDER BY timestamp DESC LIMIT $1`, [query?.limit || 100]);
        res.json({ success: true, data: result.rows });
      }
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    } finally {
      await pool.end();
    }
  }