import React, { useState, useEffect } from "react";

const Current = ({url}) => {
  const [bpmData, setBpmData] = useState({ bpm: '*' });

  const handleRefresh = async () => {
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
