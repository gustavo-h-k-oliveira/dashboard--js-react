import React, { useState } from 'react';
import './Block.css';
import Modal from './Modal';

export default function Block(props) {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    console.log(props)
    return (
        <div className='block'>
            <h3>{props.name}</h3>
            <div className="block-info">
                <div className="block-info-text">
                    <h4>Temperatura</h4>
                    <p>{props.temperature}° C</p>
                </div>
                <hr />
                <div className="block-info-text">
                    <h4>Umidade do ar</h4>
                    <p>{props.humidityAir}%</p>
                </div>
                <hr />
                <div className="block-info-text">
                    <h4>Umidade do solo</h4>
                    <p>{props.humiditySoil}%</p>
                </div>
                <hr />
                <div className="block-info-text">
                    <h4>Luminância</h4>
                    <p>{props.luminance} lux</p>
                </div>
            </div>
            <div className="block-graph">
                <img
                    src={props.img}
                    alt="Gráfico de crescimento"
                />
                <a onClick={handleOpenModal}>Ver detalhes</a>
                <Modal show={showModal} onClose={handleCloseModal}>
                    <h2>Detalhes</h2>
                    <p>Conteúdo da modal...</p>
                </Modal>
            </div>
        </div>
    )
}