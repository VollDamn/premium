import React from 'react';
import "./Main.css";
import Navbar from '../Navbar/Navbar';
import ContentInside from '../ContentInside/ContentInside';
function Main() {

    return (
        <div className='main-content'>
            <div className='header'><img src="../LOGO-WDR.png" alt="LOGO-WDR" /></div>
            <div className='content'>
                <Navbar />
                <ContentInside />
            </div>
        </div>
    )
}

export default Main