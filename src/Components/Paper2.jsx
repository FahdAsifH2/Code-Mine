import React from 'react';
import Background from './Background';
import SubjectCards from './SubjectCards';
import Navbar from './Navbar';
const cards = [
  { title: 'Data Types', description: 'Data types in programming.', pdf: '/pdfs/data_types.pdf' },
  { title: 'If & Else', description: 'Conditonal Statements in programming.', pdf: '/pdfs/If_Else.pdf' },
  { title: 'OPERATORS', description: 'Operators in programming', pdf: '/pdfs/OPERATORS.pdf' },
  { title: 'For Loops', description: 'Starting with for loops here', pdf: '/pdfs/For_Loops.pdf' },
  { title: 'While Loops', description: 'While Loops Another Precondition Loop', pdf: '/pdfs/WHILE_LOOPS.pdf' },
  { title: 'Repeat Until', description: 'Post Condition Loops', pdf: '/pdfs/REPEAT_UNTIL_Loop.pdf' },
   { title: 'Arrays', description: 'O-Levels Arrays', pdf: '/pdfs/arrays.pdf' },
   { title: 'String Operations', description: 'String Operations for Strings', pdf: '/pdfs/stringoperations.pdf' },
   { title: 'Function and Procedures', description: 'Detailed comparison of functions and procedures', pdf: '/pdfs/functionsprocedure.pdf' },
  { title: 'File handeling', description: 'All Functions of File handeling', pdf: '/pdfs/filehandeling.pdf' },
  { title: 'Flow Charts', description: 'All Sorts of shapes in Flow charts', pdf: '/pdfs/flowcharts.pdf' },
  { title: 'Linear Search', description: 'How to search in a Array', pdf: '/pdfs/linearsearch.pdf' },
  { title: 'Bubble Sort', description: 'How to sort a Array', pdf: '/pdfs/bubblesort.pdf' },
  
];


const Paper2 = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Background />
      </div>

      {/* Foreground */}
      <div className="relative bottom-10 z-10 flex flex-wrap justify-center gap-x-15 gap-y-10 pt-20 px-4  mt-40 ">
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
