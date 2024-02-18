import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Update from './Component/Update';
import Current from './Component/Current';
import Max from './Component/Max';
import Min from './Component/Min';
import CurrentList from './Component/List';
function App() {
  return (
      <div className="App">
        <Navbar />
        <div className="content">
            <Current />
            <Update />
            <Max />
            <Min />
            <CurrentList />
        </div>
      </div>
  );
}

export default App;
