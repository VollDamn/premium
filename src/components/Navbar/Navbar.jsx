import React from 'react'
import { AiOutlineTrademarkCircle } from 'react-icons/ai'
import './Navbar.css'
function Navbar() {
    return (
        <div className='navbar-content'>
            <div className='navbar'>
                <div className='link'>Lorem Ipsum</div>
                <div className='link'><b>Utilizador</b></div>
                <div className='link'>Quantum solum</div>
                <div className='link'>Marcus Tremer</div>
            </div>
            <span className='underline'> 2022 <sup><AiOutlineTrademarkCircle /></sup> <a style={{ textDecoration: 'none' }} href="https://premium-minds.com" >Premium-minds.com</a> </span >
        </div>
    )
}

export default Navbar