import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div>
                    <>
                        <Link><img src="" alt="jordan" /></Link>
                        <Link><img src="" alt="converse" /></Link>
                    </>
                    <>
                        <Link to='#'>Nike Refurbished</Link>
                        <Link to='#'>Find a Store</Link>
                        <Link to='#'>Help</Link>
                        <Link to='#'>Join Us</Link>
                        <Link to='/login'>Sing In</Link>
                    </>
                </div>
                <div></div>
            </nav>
            <h1>Navbar</h1>
        </>
    )
}

export default Navbar