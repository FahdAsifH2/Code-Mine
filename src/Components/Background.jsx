import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Background() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Full Height Background Container */}
      <div className="absolute inset-0 w-full h-full min-h-screen overflow-hidden" style={{
        background: 'linear-gradient(to bottom right, rgb(2 6 23), rgb(19 78 74), rgb(15 23 42))'
      }}>
        {/* Code-themed Background Elements */}
        <div className="absolute inset-0">
          
          {/* Binary Code Rain Effect */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className="absolute font-mono text-teal-400 text-xs"
                style={{
                  left: `${12.5 * i}%`,
                  animation: `binaryRain ${4 + Math.random() * 3}s linear infinite ${Math.random() * 2}s`
                }}
              >
                {Array.from({length: 20}, () => Math.random() > 0.5 ? '1' : '0').join('\n')}
              </div>
            ))}
          </div>
          
          {/* Floating Code Blocks */}
          <div className="absolute top-20 left-20 bg-slate-800/40 backdrop-blur-sm border border-teal-500/30 rounded-lg p-4 font-mono text-xs text-teal-300" style={{
            animation: 'codeFloat 8s ease-in-out infinite'
          }}>
            <div className="text-purple-400">function</div>
            <div className="text-blue-400">getData() &#123;</div>
            <div className="text-gray-400 ml-4">return data;</div>
            <div className="text-blue-400">&#125;</div>
          </div>
          
          <div className="absolute bottom-32 right-32 bg-slate-800/40 backdrop-blur-sm border border-teal-500/30 rounded-lg p-4 font-mono text-xs text-teal-300" style={{
            animation: 'codeFloat 6s ease-in-out infinite 2s'
          }}>
            <div className="text-red-400">const</div>
            <div className="text-yellow-400">result = </div>
            <div className="text-green-400">calculate();</div>
          </div>
          
          {/* Circuit Board Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full">
              <defs>
                <pattern id="circuit" width="120" height="120" patternUnits="userSpaceOnUse">
                  <path d="M20,20 L100,20 L100,100 M60,20 L60,60 L100,60" 
                        fill="none" stroke="currentColor" strokeWidth="2" className="text-teal-400"/>
                  <circle cx="20" cy="20" r="3" fill="currentColor" className="text-teal-500"/>
                  <circle cx="100" cy="100" r="3" fill="currentColor" className="text-teal-500"/>
                  <circle cx="60" cy="60" r="3" fill="currentColor" className="text-teal-500"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)" className="animate-pulse" />
            </svg>
          </div>
          
          {/* Hex Code Particles */}
          <div className="absolute inset-0">
            {['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF3'].map((color, i) => (
              <div 
                key={i}
                className="absolute font-mono text-xs text-teal-400/60"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`,
                  animation: `hexFloat ${5 + i}s ease-in-out infinite ${i}s`
                }}
              >
                {color}
              </div>
            ))}
          </div>
          
          {/* Terminal Cursor Blinking */}
          <div className="absolute top-1/3 right-1/4 font-mono text-green-400 text-sm">
            <span>user@codemine:~$ </span>
            <span className="bg-green-400 text-black animate-pulse">█</span>
          </div>
          
          {/* Data Visualization Lines */}
          <div className="absolute inset-0">
            <svg className="w-full h-full opacity-20">
              <path d="M50,400 Q200,200 400,350 T800,250" 
                    fill="none" stroke="url(#gradient1)" strokeWidth="2" className="animate-pulse"/>
              <path d="M100,500 Q300,300 600,400 T1000,200" 
                    fill="none" stroke="url(#gradient2)" strokeWidth="2" className="animate-pulse" style={{animationDelay: '1s'}}/>
              
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#14B8A6" stopOpacity="0"/>
                  <stop offset="50%" stopColor="#14B8A6" stopOpacity="1"/>
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0"/>
                  <stop offset="50%" stopColor="#0891B2" stopOpacity="1"/>
                  <stop offset="100%" stopColor="#14B8A6" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Programming Symbols */}
          <div className="absolute top-40 left-1/3 text-4xl text-teal-400/30 font-mono" style={{
            animation: 'symbolFloat 7s ease-in-out infinite'
          }}>
            &#123;&#125;
          </div>
          <div className="absolute bottom-40 left-1/4 text-3xl text-cyan-400/30 font-mono" style={{
            animation: 'symbolFloat 5s ease-in-out infinite 1s'
          }}>
            &lt;/&gt;
          </div>
          <div className="absolute top-1/2 right-1/5 text-5xl text-teal-500/20 font-mono" style={{
            animation: 'symbolFloat 6s ease-in-out infinite 2s'
          }}>
            []
          </div>
        </div>
        
        {/* Scan Line Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/10 to-transparent pointer-events-none" style={{
          animation: 'scanLine 8s linear infinite'
        }} />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center text-center py-20">
          <div className="relative">
            {/* Terminal-style prompt */}
            <div className="mb-4 font-mono text-teal-400 text-sm opacity-0" style={{
              animation: 'typewriter 2s steps(20) 0.5s forwards'
            }}>
              <span className="text-gray-500">root@localhost:~# </span>
              <span className="text-amber-400">init</span>
              <span className="text-white"> CODE_MINE</span>
            </div>
            
            <h1 className="font-mono pt-10 mb-100 font-bold text-6xl md:text-8xl leading-none tracking-tight bg-gradient-to-r from-teal-300 via-cyan-200 to-green-400 bg-clip-text text-transparent filter drop-shadow-2xl" style={{
              animation: 'codeGlow 3s ease-in-out infinite alternate'
            }}>
              CODEMINE.
            </h1>
            
            {/* Code Comment Style Underline */}
            <div className="mt-2 font-mono text-teal-400/60 text-sm">
              .
            </div>
          </div>
        </div>
        
        {/* Footer */}
     
        <div className="fixed bottom-0 w-full z-20 ">
          <Footer />
        </div>


      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        body, html {
          margin: 0;
          padding: 0;
          height: 100%;
          overflow-x: hidden;
          background: linear-gradient(to bottom right, rgb(2 6 23), rgb(19 78 74), rgb(15 23 42));
        }
        
        @keyframes binaryRain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes codeFloat {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-20px) rotateX(5deg); }
        }
        
        @keyframes hexFloat {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.6; }
          50% { transform: translateY(-15px) scale(1.1); opacity: 1; }
        }
        
        @keyframes symbolFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes codeGlow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(45, 212, 191, 0.3)); }
          50% { filter: drop-shadow(0 0 20px rgba(45, 212, 191, 0.6)); }
        }
        
        @keyframes typewriter {
          0% { width: 0; opacity: 1; }
          100% { width: 100%; opacity: 1; }
        }
        
        @keyframes fill {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        .animate-fill {
          animation: fill 3s ease-out forwards;
        }
        
        @keyframes tagFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scanLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }
      `}</style>
    </div>
  )
}

export default Background