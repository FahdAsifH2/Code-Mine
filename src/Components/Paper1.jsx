import React from 'react';
import Background from './Background';
import SubjectCards from './SubjectCards';
const cards = [
  { title: 'SOFTWARE Part 1', description: 'These notes cover first half of Chap 4 Software', pdf: '/pdfs/Software_part1.pdf' },
  { title: 'Data Transmission', description: 'Data Transmission is how data moves between devices using different methods, modes, and timing.', pdf: '/pdfs/Data_Transmission.pdf' },
  { title: 'Card 3', description: 'Desc 3', pdf: '/pdfs/card3.pdf' },
 
];


const Paper1 = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Background />
      </div>

      {/* Foreground */}
      <div className="relative z-10 flex flex-wrap justify-center gap-x-6 gap-y-10 pt-20 px-4 mt-40">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.pdf}
            download
            className="w-[150px] sm:w-[160px] md:w-[170px] lg:w-[180px] xl:w-[190px] block "
          >
            <SubjectCards title={card.title} description={card.description} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Paper1;
