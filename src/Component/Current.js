import React, { useState, useEffect } from "react";

const Current = () => {
  const [bpmData, setBpmData] = useState({ bpm: '*' });

  const handleRefresh = async () => {
    const url = 'http://10.20.0.20:8080/bpm'
    const response = await fetch(url);
    const data = await response.json();
    setBpmData({ bpm: data.bpm });
    // console.log("Success!")
  };
  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <div className='BpmSettingComponent'>
      <h2>Current BPM: {bpmData.bpm}</h2>
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

export default Current;
