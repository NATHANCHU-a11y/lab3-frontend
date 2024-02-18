import React, { useState, useEffect } from "react";

const CurrentList = () => {
  const [bpmData, setBpmData] = useState([]);
  const [deleteBpm, setDeleteBpm] = useState('');

  useEffect(() => {
    const fetchAllBPMs = async () => {
      try {
        const url = 'http://10.20.0.20:8080/bpm/list';
        const response = await fetch(url);
        const data = await response.json();
        setBpmData(data.bpm_list);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchAllBPMs();
  }, []);

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      await fetch('http://10.20.0.20:8080/bpm', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bpm: parseInt(deleteBpm, 10) })
      });
      const updatedResponse = await fetch('http://10.20.0.20:8080/bpm/list');
      const updatedData = await updatedResponse.json();
      setBpmData(updatedData.bpm_list);
      setDeleteBpm(''); 
      console.log("Success deleting BPM!");
    } catch (error) {
      console.error("Error deleting data:", error.message);
    }
  };

  // Render the BPM list
  return (
    <div className='BpmSettingComponent'>
      <h2>Current All BPM</h2>
      <div>
        <ul>
          {bpmData.map((bpmItem, index) => (
            <li key={index}>
              {bpmItem}
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleDelete}>
        <input 
        type="number"
        required
        value={deleteBpm}
        placeholder="Enter delete BPM"
        onChange={(e) => setDeleteBpm(e.target.value)}
        />
        <button type="submit">Delete BPM</button>
      </form>
    </div>
  );
};

export default CurrentList;
