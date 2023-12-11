import React from 'react'
import './Header.scss'
import Navbar from './Navbar/Navbar'
import BrandHeader from './BrandHeader/BrandHeader'

const Header = () => {
    return (
        <>
            <div className='pre-l-header-container'>
                <BrandHeader />
                <Navbar />
            </div>
            <div className="pre-scrim" data-pre="Scrim"></div>
        </>
    )
}

export default Header