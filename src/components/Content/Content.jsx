import React from 'react'
import Navbar from '../Navbar/Navbar';
import ContentInside from '../ContentInside/ContentInside';
function Content() {
    return (
        <div className='content'>
            <Navbar />
            <ContentInside />
        </div>
    )
}

export default Content