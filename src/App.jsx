import React from 'react';
import Cards from './Components/Card';
import Background from './Components/Background';
import Foregound from './Components/Foreground';
import Paper1 from './Components/Paper1';
import Paper2 from './Components/Paper2';
import Login from './Components/Login'
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';


function App() {
  return (
    <div>
      <Routes>
      <Route path ='/' element={<Login/>}/>
      <Route path="/home" element={<ProtectedRoute><div className='absolute inset-0 z-0'><Background/></div><Foregound /></ProtectedRoute>} />
        
        <Route path="/Paper1" element={<ProtectedRoute><Paper1 /></ProtectedRoute>} />
        <Route path="/Paper2" element={<ProtectedRoute><Paper2 /></ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;
