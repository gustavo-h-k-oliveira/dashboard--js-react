import React from 'react';
import './SignUp.css';

export default function SignUp() {
    return (
        <div id='root'>
            <div className='container'>
                <h1>Cadastrar-se na <strong>Grow Smart</strong></h1>
                <div className='form'>
                    <input type='' id='' placeholder='Nome'></input>
                    <input type='' id='' placeholder='E-mail'></input>
                    <input type='' id='' placeholder='Senha'></input>
                    <button type='submit' id=''>Cadastrar</button>
                </div>
                <p>Já está cadastrado? Faça o <a href='#'>login</a>.</p>
            </div>
        </div>
    )
}