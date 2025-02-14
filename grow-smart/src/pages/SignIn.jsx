import React from 'react';
import './SignIn.css';

export default function SignIn() {
    return (
        <div id='root'>
            <div className='container'>
                <h1>Entrar na <strong>Grow Smart</strong></h1>
                <div className='form'>
                    <input type='' id='' placeholder='E-mail'></input>
                    <input type='' id='' placeholder='Senha'></input>
                    <button type='submit' id=''>Entrar</button>
                </div>
                <p>Não está cadastrado? Faça o <a href='#'>cadastro</a>.</p>
            </div>
        </div>
    )
}