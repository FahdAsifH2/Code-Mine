
// Foreground.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

function Foreground() {
  const navigate = useNavigate();
  
  const [p1, setP1] = useState("P1");
  const [p1Data, setP1Data] = useState("Covers systems, logic gates, networking, and theory essentials.");
  
  const [p2, setP2] = useState("P2");
  const [p2Data, setP2Data] = useState("Covers pseudocode, algorithms, flowcharts, and programming.");
  
  return (
    <div className="relative z-20 w-full h-full">
      <div className="flex items-center justify-center gap-10 w-full h-screen pt-20 px-4">
        <Card
          title={p1}
          description={p1Data}
          onClick={() => {
            console.log("P1 clicked"); // Better for debugging than alert
            navigate('/Paper1');
          }}
        />
        <Card
          title={p2}
          description={p2Data}
          onClick={() => {
            console.log("P2 clicked"); // Better for debugging than alert
            navigate('/Paper2');
          }}
        />
      </div>
    </div>
  );
}

export default Foreground