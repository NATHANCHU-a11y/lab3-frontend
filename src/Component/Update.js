import React, { useEffect, useState } from "react";

const Update = ({url}) => {
  const [newBpmInput, setNewBpmInput] = useState('');
  const [updateStatus, setUpdateStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ bpm: parseInt(newBpmInput, 10) })
      });
      if (response.ok) {
        setUpdateStatus('BPM updated successfully');
      } else {
        setUpdateStatus('Failed to update BPM');
      }
  };
  

  useEffect(() => {
  }, [newBpmInput]);

  return (
    
    <div className="updateComponent">
      <h2>Enter new BPM:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          required
          value={newBpmInput}
          onChange={(e) => setNewBpmInput(e.target.value)}
        />
        <button type="submit">Update</button>
        {updateStatus && <p>{updateStatus}</p>}
      </form>
    </div>
  );
};

export default Update;
