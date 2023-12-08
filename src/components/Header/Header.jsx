import React from 'react'
import './Header.scss'
import Navbar from './Navbar/Navbar'
import BrandHeader from './BrandHeader/BrandHeader'

const Header = () => {
    return (
        <>
            <BrandHeader />
            <Navbar />
        </>
    )
}

export default Header