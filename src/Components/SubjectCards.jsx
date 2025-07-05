import React from 'react'

// Simple SubjectCards Component
const SubjectCards = ({title,description}) => (
    <div className="relative w-42 h-42 bg-white/10 backdrop-blur-md border-2 border-[#DAA520] rounded-xl shadow-xl z-[10] flex items-center justify-center">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal-700/20 to-[#FF8C00]/20 z-0" />
      <div className="relative z-10 text-center">
        <h2 className="text-2xl font-bold text-[#FF8C00] mb-2">{title}</h2>
        <p className="text-sm text-[#00CED1]">{description}</p>
      </div>
    </div>
  );

export default SubjectCards