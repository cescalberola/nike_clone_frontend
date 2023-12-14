import React from 'react'
import './Header.scss'
import Navbar from './Navbar/Navbar'
import BrandHeader from './BrandHeader/BrandHeader'
import Banner from './Banner/Banner'

const Header = () => {
    return (
        <>
            <div className='pre-l-header-container'>
                <BrandHeader />
                <Navbar />
                <Banner />
            </div>
            <div className="pre-scrim" data-pre="Scrim"></div>
        </>
    )
}

export default Header