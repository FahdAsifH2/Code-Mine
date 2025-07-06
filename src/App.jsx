import React from 'react';
import Cards from './Components/Card';
import Background from './Components/Background';
import Foregound from './Components/Foreground';
import Paper1 from './Components/Paper1';
import Paper2 from './Components/Paper2';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>

            <div className='absolute inset-0 z-0'>
            <Background/>
            </div>
            
            <Foregound />
          
          </>
        } />
        <Route path="/Paper1" element={<Paper1 />} />
        <Route path="/Paper2" element={<Paper2 />} />
      </Routes>
    </div>
  );
}

export default App;
