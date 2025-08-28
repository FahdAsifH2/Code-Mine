// Components/VisitorTracker.js
import { useEffect } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../Firebase/Firebase';

const VisitorTracker = () => {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        // Firebase Firestore initialize
        const db = getFirestore(app);
        
        // IP aur location data get karenge
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        
        const locationResponse = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
        const locationData = await locationResponse.json();
        
        // Visitor data prepare karenge
        const visitorInfo = {
          ip: ipData.ip,
          country: locationData.country_name || 'Unknown',
          countryCode: locationData.country || 'Unknown',
          city: locationData.city || 'Unknown',
          region: locationData.region || 'Unknown',
          timezone: locationData.timezone || 'Unknown',
          isp: locationData.org || 'Unknown',
          latitude: locationData.latitude || null,
          longitude: locationData.longitude || null,
          currentPage: window.location.pathname,
          referrer: document.referrer || 'Direct',
          userAgent: navigator.userAgent,
          timestamp: new Date(),
          visitDate: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
          visitTime: new Date().toLocaleTimeString()
        };
        
        // Firebase mein save karenge
        await addDoc(collection(db, 'websiteVisitors'), visitorInfo);
        
      } catch (error) {
        // Silent fail - koi error show nahi karenge
        console.log('Visitor tracking failed silently');
      }
    };
    
    // Component mount hone par ek bar run hoga
    trackVisitor();
  }, []);
  
  // Kuch render nahi karta
  return null;
};

export default VisitorTracker;