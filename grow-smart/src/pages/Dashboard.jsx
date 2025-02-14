import React from 'react';
import Header from "../components/Layout/Header";
import Navbar from "../components/Layout/Navbar";
import Block from "../components/UI/Block";
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div id="root">
      <Navbar />
      <div className="main-content">
        <Header />
        <div className='vertical-container'></div>
        <div className='grid-dashboard'>
          <Block 
            name='Bancada A'
            temperature={20}
            humidityAir={70}
            humiditySoil={50}
            luminance={1000}
            img='#'
          />
          <Block 
            name='Bancada B'
            temperature={22}
            humidityAir={80}
            humiditySoil={60}
            luminance={2000}
            img='#'
          />
          <Block 
            name='Bancada C'
            temperature={24}
            humidityAir={90}
            humiditySoil={70}
            luminance={3000}
            img='#'
          />
          <Block 
            name='Bancada D'
            temperature={26}
            humidityAir={100}
            humiditySoil={80}
            luminance={4000}
            img='#'
          />
        </div>
      </div>
    </div>
  );
}
