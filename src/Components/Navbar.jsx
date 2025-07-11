import React from 'react';
import logo from '/logo.png';

const Navbar = () => {
  return (
    <div>
      <div className='text-sm flex justify-between items-center py-1 px-4 bg-gradient-to-r from-teal-900 via-slate-900 to-teal-900 text-green-400 font-mono shadow-2xl backdrop-blur-sm border-b border-teal-600/30'>

        {/* Left side: Logo + CODE MINE */}
        <div className='flex items-center'>
          <img src={logo} alt="Logo" className='h-10 w-10' />

          <div className='px-2 font-xl'> 
            <span className="text-gray-500">&lt;</span>
            <span className="text-amber-400 px-1">CODE MINE</span>
            <span className="text-gray-500">/&gt;</span>
          </div>
        </div>

        {/* Center: by Fahd Asif */}
        <div className='absolute left-1/2 transform -translate-x-1/2 font-xl'> 
          <span className="text-gray-500">&lt;</span>
          <span className="text-amber-400 px-1">by Fahd Asif.</span>
          <span className="text-gray-500">/&gt;</span>
        </div>

       
        {/* Right: FREE NOTES */}
        <div className='font-xl'> 
          <span className="text-gray-500">&lt;</span>
          <span className="text-amber-400 px-1">FREE NOTES</span>
          <span className="text-gray-500">/&gt;</span>
        </div>


      </div>
    </div>
  );
};

export default Navbar;
