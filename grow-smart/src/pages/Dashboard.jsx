import React, { useState, useEffect } from 'react';
import Header from "../components/Layout/Header";
import Navbar from "../components/Layout/Navbar";
import Block from "../components/UI/Block";
import Modal from "../components/UI/Modal"; // Importa o componente Modal
import './Dashboard.css';
import videocamIcon from '../assets/videocam.svg';

export default function Dashboard() {
  const [isOnline, setIsOnline] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal

  useEffect(() => {
    const checkServerStatus = () => {
      // Simulação de verificação de status do servidor
      fetch('/api/server-status')
        .then(response => response.json())
        .then(data => setIsOnline(data.isOnline))
        .catch(() => setIsOnline(false));
    };

    const intervalId = setInterval(checkServerStatus, 5000); // Verifica a cada 5 segundos

    return () => clearInterval(intervalId);
  }, []);

  const handleVideoButtonClick = () => {
    setIsModalOpen(true); // Abre o modal ao clicar no botão
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Fecha o modal
  };

  return (
    <div id="root">
      <Navbar />
      <div className="main-content">
        <Header />
        <div className='vertical-container'>
          <div className='status-container'>
            <div className={`status-indicator ${isOnline ? 'online' : 'offline'}`}></div>
            <p className='status-indicator-label'>
              {isOnline ? 'On-line' : 'Off-line'}
            </p>
          </div>
          <button className='video-button' onClick={handleVideoButtonClick}>
            <img src={videocamIcon} alt='ícone de câmera' />
          </button>
        </div>
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
      <Modal show={isModalOpen} onClose={handleCloseModal}>
        <h2>Modal Content</h2>
        <p>Este é o conteúdo do modal.</p>
      </Modal>
    </div>
  );
}
