import React, { useState, useEffect } from "react";

const Min = ({url}) => {
  const [minData, setMinData] = useState({ min: '*' });

  const handleRefresh = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
      const data = await response.json();
      setMinData({ min: data.bpm });
      // console.log("Min Success!");
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  
  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      await fetch(url + 'min', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bpm: parseInt(minData, 10) })
      });
      const updatedResponse = await fetch(url + 'min');
      const updatedData = await updatedResponse.json();
      setMinData(updatedData.bpm);
  
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
      <h2>Current Min: {minData.min}</h2>
      <button onClick={handleRefresh}>Refresh</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Min;