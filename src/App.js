import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Update from './Component/Update';
import Current from './Component/Current';
import Max from './Component/Max';
import Min from './Component/Min';
import CurrentList from './Component/List';
function App() {
  const url = 'http://10.20.0.20:8080/bpm'
  return (
      <div className="App">
        <Navbar />
        <div className="content">
            <Current url = {url}/>
            <Update url = {url}/>
            <Max url = {url}/>
            <Min url = {url}/>
            <CurrentList url = {url}/>
        </div>
      </div>
  );
}

export default App;
