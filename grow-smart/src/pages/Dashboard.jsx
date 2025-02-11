import React from 'react';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import './Dashboard.css';

function App() {
  return (
    <div id="root">
      <Navbar />
      <div className="main-content">
        <Header />
        <div className='grid-dashboard'>
          <div className='vertical-container'></div>
          <div className='block block1'></div>
          <div className='block block2'></div>
          <div className='block block3'></div>
          <div className='block block4'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
