import React from 'react';
import { FaRegFileAlt } from 'react-icons/fa';

function Card({ title, description, onClick }) {
  return (
    <div
      onClick={onClick} // ✅ This must be without quotes
      className="relative w-72 h-80 rounded-3xl bg-white/10 backdrop-blur-md border-2 border-[#DAA520] p-6 shadow-2xl hover:shadow-[#FF8C00]/30 transition-transform duration-500 hover:scale-105 hover:rotate-1"
    >
      {/* Subtle background glow (static) */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-700/20 to-[#FF8C00]/20" />

      <div className="relative z-10">
        {/* Icon and accent dot */}
        <div className="flex justify-between items-start mb-6">
          <FaRegFileAlt className="text-3xl text-white/80" />
          <div className="w-3 h-3 bg-[#DAA520] rounded-full" />
        </div>

        {/* Main Content */}
        <div className="space-y-2 mb-8 text-center">
          <h1 className="text-4xl font-bold text-[#FF8C00]">{title}</h1>
          <p className="text-xl font-semibold text-[#00CED1]">{description}</p>
        </div>

        {/* Button (optional, won't trigger click unless handled) */}
        <button className="w-full py-3 mt-2 rounded-2xl bg-gradient-to-r from-[#008080] to-[#FF8C00] hover:from-[#006666] hover:to-[#e67600] text-white font-bold shadow-lg transform hover:scale-105 transition-transform duration-300 active:scale-95">
          Get Notes
        </button>
      </div>
    </div>
  );
}

export default Card;
