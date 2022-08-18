import React from 'react'
import "./MainContent.css"
import Header from '../Header/Header'
import Content from '../Content/Content'
function MainContent() {
    return (
        <div className='main-content'>
            <Header />
            <Content />
        </div>
    )
}

export default MainContent