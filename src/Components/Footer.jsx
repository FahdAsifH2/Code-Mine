import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-teal-900 via-slate-900 to-teal-900 text-green-400 shadow-inner border-t border-teal-600/30">
      <div className="flex justify-center items-center h-12 font-mono text-lg">
        <span className="text-gray-500">&lt;</span>
        <span className="text-amber-400 ">Developed by a Student for Students</span>
        <span className="text-gray-500">/&gt;</span>
      </div>
      <div className="text-center mt-0  text-sm text-gray-400 font-mono tracking-wider">
        © {new Date().getFullYear()} CodeMine. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
