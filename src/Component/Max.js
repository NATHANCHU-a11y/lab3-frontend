import React, { useState, useEffect } from "react";

const Max = () => {
  const [maxData, setMaxData] = useState({ max: '*' });

  const url = 'http://10.20.0.20:8080/bpm/max';

  const handleRefresh = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMaxData({ max: data.bpm });
    // console.log("Max Success!")
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://10.20.0.20:8080/bpm/max', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bpm: parseInt(maxData, 10) })
      });
      const updatedResponse = await fetch('http://10.20.0.20:8080/bpm/max');
      const updatedData = await updatedResponse.json();
      setMaxData(updatedData.bpm);
  
      console.log("Success deleting BPM!");
    } catch (error) {
      console.error("Error deleting data:", error.message);
    }
  };
  
  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <div className='BpmSettingComponent'>
      <h2>Current Max: {maxData.max}</h2>
      <button onClick={handleRefresh}>Refresh</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Max;
