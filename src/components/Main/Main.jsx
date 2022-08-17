import React, { useState } from 'react';
import "./Main.css";
import { Link } from "react-router-dom";
import { AiOutlineTrademarkCircle } from 'react-icons/ai'
import { HiOutlineMinus } from 'react-icons/hi'
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
                        <div className='content-checkbox-title'>Tipo de utilizador <HiOutlineMinus /></div>
                        <div className='checkbox'>
                            <div className='individual-checkbox'>
                                <input type="checkbox" /><span>Project Manager</span>
                            </div>
                            <div className='individual-checkbox'>
                                <input type="checkbox" /><span> Developer </span>
                            </div>
                            <div className='individual-checkbox'>
                                <input type="checkbox" /><span> Architect </span>
                            </div>
                        </div>
                    </div>
                    <div className='content-form'>
                        <div className="content-form-title"> Contacto  <HiOutlineMinus /></div>
                        <div className='form'>
                            <div className='individual-form'>
                                Email<input type="email" />
                            </div>
                            <div className='individual-form'>
                                Palavra-passe<input type="password" />
                            </div>
                            <div className='individual-form'>
                                Telefone<input type="tel" placeholder="+351" pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
                                    required />
                            </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className='cancel-button'>Cancelar</button>
                        <button className='save-button'>GUARDAR</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main