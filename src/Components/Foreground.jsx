import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

function Foregound() {
  const navigate = useNavigate();

  const [p1, setP1] = useState("P1");
  const [p1Data, setP1Data] = useState("Covers systems, logic gates, networking, and theory essentials.");

  const [p2, setP2] = useState("P2");
  const [p2Data, setP2Data] = useState("Covers pseudocode, algorithms, flowcharts, and programming.");

  return (
    <div>
      <div className="flex items-center justify-center gap-10 fixed top-0 left-0 z-[3] w-full h-full mt-20">
        <Card
          title={p1}
          description={p1Data}
          onClick={() => {
            alert("P1");
            navigate('/Paper1');
          }}
        />
        <Card
          title={p2}
          description={p2Data}
          onClick={() => {
            alert("P2");
            navigate('/Paper2');
          }}
        />
      </div>
    </div>
  );
}

export default Foregound;
