// Components/VisitorTracker.js
import { useEffect } from 'react';

const VisitorTracker = () => {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        console.log('🚀 Visitor tracking started...');
        
        // Get IP and location data
        console.log('📡 Fetching IP...');
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        
        if (!ipResponse.ok) {
          throw new Error('IP fetch failed');
        }
        
        const ipData = await ipResponse.json();
        console.log('📍 IP fetched:', ipData.ip);

        console.log('🌍 Fetching location data...');
        const locationResponse = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
        
        if (!locationResponse.ok) {
          throw new Error('Location fetch failed');
        }
        
        const locationData = await locationResponse.json();
        console.log('📍 Location data:', locationData);

        // Prepare visitor data
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
          visitDate: new Date().toISOString().split('T')[0],
          visitTime: new Date().toLocaleTimeString()
        };

        console.log('📝 Complete visitor info prepared:', visitorInfo);

        // LOG EVERYTHING TO CONSOLE (No API needed!)
        console.log('🔥 NEW VISITOR DETECTED!');
        console.log('=======================');
        console.log(`🌍 IP: ${visitorInfo.ip}`);
        console.log(`📍 Location: ${visitorInfo.city}, ${visitorInfo.country}`);
        console.log(`🏢 ISP: ${visitorInfo.isp}`);
        console.log(`📱 Browser: ${visitorInfo.userAgent.substring(0, 50)}...`);
        console.log(`📄 Page: ${visitorInfo.currentPage}`);
        console.log(`🔗 Referrer: ${visitorInfo.referrer}`);
        console.log(`🕐 Time: ${visitorInfo.visitTime}`);
        console.log(`⏰ Timezone: ${visitorInfo.timezone}`);
        console.log(`📍 Coordinates: ${visitorInfo.latitude}, ${visitorInfo.longitude}`);
        console.log(`🏷️ Country Code: ${visitorInfo.countryCode}`);
        console.log(`🗺️ Region: ${visitorInfo.region}`);
        console.log('=======================');
        
        console.log('✅ Visitor tracking completed successfully!');

      } catch (error) {
        console.error('❌ Visitor tracking failed:', error);
        console.error('Error message:', error.message);
        
        // Log error info too
        console.log('🔥 VISITOR ERROR DETECTED!');
        console.log('=======================');
        console.log(`❌ Error: ${error.message}`);
        console.log(`📄 Page: ${window.location.pathname}`);
        console.log(`📱 Browser: ${navigator.userAgent.substring(0, 50)}...`);
        console.log(`🕐 Time: ${new Date().toLocaleTimeString()}`);
        console.log('=======================');
      }
    };

    trackVisitor();
  }, []);

  return null;
};

export default VisitorTracker;