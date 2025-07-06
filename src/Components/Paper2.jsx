import React from 'react';
import Background from './Background';
import SubjectCards from './SubjectCards';
const cards = [
  { title: 'Data Types', description: 'Data types in programming.', pdf: '/pdfs/data_types.pdf' },
  { title: 'If & Else', description: 'Conditonal Statements in programming.', pdf: '/pdfs/If_Else.pdf' },
  { title: 'OPERATORS', description: 'Operators', pdf: '/pdfs/OPERATORS.pdf' },
  { title: 'Card 4', description: 'Desc 4', pdf: '/pdfs/card4.pdf' },
  { title: 'Card 5', description: 'Desc 5', pdf: '/pdfs/card5.pdf' },
  { title: 'Card 6', description: 'Desc 6', pdf: '/pdfs/card6.pdf' },
  { title: 'Card 7', description: 'Desc 7', pdf: '/pdfs/card7.pdf' },
  { title: 'Card 8', description: 'Desc 8', pdf: '/pdfs/card8.pdf' },
  { title: 'Card 9', description: 'Desc 9', pdf: '/pdfs/card9.pdf' },
  { title: 'Card 10', description: 'Desc 10', pdf: '/pdfs/card10.pdf' },
  { title: 'Card 11', description: 'Desc 11', pdf: '/pdfs/card11.pdf' },
  { title: 'Card 12', description: 'Desc 12', pdf: '/pdfs/card12.pdf' },
];


const Paper2 = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Background />
      </div>

      {/* Foreground */}
      <div className="relative bottom-10 z-10 flex flex-wrap justify-center gap-x-6 gap-y-10 pt-20 px-4 mt-40 ">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.pdf}
            download
            className="w-[150px] sm:w-[160px] md:w-[170px] lg:w-[180px] xl:w-[190px] block"
          >
            <SubjectCards title={card.title} description={card.description} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Paper2;
