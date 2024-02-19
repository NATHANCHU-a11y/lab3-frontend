import React, { useState, useEffect } from "react";

const Max = ({url}) => {
  const [maxData, setMaxData] = useState({ max: '*' });

  const handleRefresh = async () => {
    const response = await fetch(url + 'max');
    const data = await response.json();
    setMaxData({ max: data.bpm });
    // console.log("Max Success!")
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await fetch(url + 'max', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bpm: parseInt(maxData, 10) })
      });
      const updatedResponse = await fetch(url + 'max');
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
