import React from 'react';
import "./Main.css";
import { Link } from "react-router-dom";
import { AiOutlineTrademarkCircle } from 'react-icons/ai'
function Main() {
    return (
        <div className='main-content'>
            <div className='header'><img src="../LOGO-WDR.png" alt="LOGO-WDR" /></div>
            <div className='content'>
                <div className='navbar-content'>
                    <div className='navbar'>
                        <div className='link'>Lorem Ipsum</div>
                        <div className='link'>Utilizador</div>
                        <div className='link'>Quantum solum</div>
                        <div className='link'>Marcus Tremer</div>
                    </div>
                    <span className='underline'> 2022 <sup><AiOutlineTrademarkCircle /></sup> <a style={{ textDecoration: 'none' }} href="https://premium-minds.com" >Premium-minds.com</a> </span >
                </div>
                <div className='content-inside'>
                    <div className='user'>Utilizador</div>
                    <div className='content-checkbox'>
                        <div className='content-checkbox-title'>Tipo de utilizador</div>
                        <div className='checkbox'>
                            <div className='individual-checkbox'>
                                <input type="checkbox" />Project Manager
                            </div>
                            <div className='individual-checkbox'>
                                <input type="checkbox" /> Developer
                            </div>
                            <div className='individual-checkbox'>
                                <input type="checkbox" /> Architect
                            </div>
                        </div>
                    </div>
                    <div className='content-form'>
                        <div classname="content-form-title">Contacto</div>
                        <div className='form'>
                            <div className='individual-form'>
                                <input type="email" />Email
                            </div>
                            <div className='individual-form'>
                                <input type="password" />Palavra-passe
                            </div>
                            <div className='individual-form'>
                                <input type="phone" />Telefone
                            </div>
                        </div>
                    </div>
                    <div classname="buttons">
                        <button className='cancel-button'>Cancelar</button>
                        <button className='save-button'>Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main