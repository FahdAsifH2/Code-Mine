// track-visitor.js (create this file in same directory as App.jsx)
export default function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const visitorData = req.body;
    
    // Get additional server-side info
    const serverIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const country = req.headers['cf-ipcountry'] || 'Unknown';
    
    console.log('🔥 NEW VISITOR DETECTED!');
    console.log('=======================');
    console.log(`🌍 IP: ${visitorData.ip || serverIP}`);
    console.log(`📍 Location: ${visitorData.city}, ${visitorData.country}`);
    console.log(`🏢 ISP: ${visitorData.isp}`);
    console.log(`📱 Browser: ${visitorData.userAgent?.substring(0, 50)}...`);
    console.log(`📄 Page: ${visitorData.currentPage}`);
    console.log(`🔗 Referrer: ${visitorData.referrer}`);
    console.log(`🕐 Time: ${visitorData.visitTime}`);
    console.log(`⏰ Timezone: ${visitorData.timezone}`);
    
    if (visitorData.error) {
      console.log(`❌ Error: ${visitorData.error}`);
    }
    
    console.log('=======================');
    
    res.status(200).json({ 
      success: true, 
      message: 'Visitor tracked successfully' 
    });
  }