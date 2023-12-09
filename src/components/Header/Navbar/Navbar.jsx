import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom';
// import Nike from '../../../assets/logos/nike.svg'

const Navbar = () => {
    const handleSubmit = () => { console.log('submit') }
    const handleChange = () => { console.log('change') }

    return (
        <div className='pre-l-header'>
            <div className="pre-l-wrapper">
                <div className='pre-l-logo'>
                    <Link to={'/'} className='pre-logo-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="pre-logo-svg" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path fill="currentColor" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"></path></svg>
                    </Link>
                </div>
                <div className='pre-l-nav-box'>
                    <nav className='pre-l-nav'>
                        <div className="pre-l-desktop-menu">
                            <div className="pt1-lg">
                                <ul className='pre-desktop-menu'>
                                    <li className='pre-desktop-menu-item d-lg-ib d-sm-h is-static is-header'>
                                        <Link to='#' className='pre-desktop-menu-link headline-5 p3-lg pt4-sm d-smb no-outline'>New & Featured</Link>
                                        <div className='pre-desktop-menu-dropdown bg-white p10-sm pt4-sm ncss-container'>
                                            <div className="pre-columns-container ncss-row">
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <a href="https://www.nike.com/w/member-sale-9t7gt" className="pre-menu-item d-sm-h is-static is-header headline-5">Limited Time</a>                                                    {/* <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>Limited Time</a> */}
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shop All: Extra 25% Off</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Fleece Favorites: Ends 12.7</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Best Sellers</a>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>Gifts</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>The Most Iconic Gifts</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Gifts Cards</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Stocking Stuffers</a>
                                                </div>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>New & Featured</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>New Arrivals</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Best Sellers</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Only at Nike</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>New & Upcomming Drops</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>SNKRS Lunch Calendar</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Dunk the Halls</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>NEW: Nike Refurbished</a>
                                                </div>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>Shop Icons</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Air Jordan 1</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Air Jordan</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Dunk</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Air Max</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Blazer</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Pegasus</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Metcom</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>LeBron</a>
                                                </div>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <>
                                                        <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>New For Men</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shoes</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Clothing</a>
                                                    </>
                                                    <>
                                                        <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>New For Women</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shoes</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Clothing</a>
                                                    </>
                                                    <>
                                                        <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>New For Kids</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shoes</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Clothing</a>
                                                    </>
                                                </div>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>Jordan</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shop All</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Latest in Jordan</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Jordan 11 and More</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Complete the Fit with Jordan</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Men</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Women</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Kids</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Basketball</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='pre-desktop-menu-item d-lg-ib d-sm-h is-static is-header'>
                                        <Link to='#' className='pre-desktop-menu-link'>Men</Link>
                                        <div className='pre-desktop-menu-dropdown  bg-white p10-sm pt4-sm ncss-container'>
                                            <div className='pre-columns-container'>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>Limited Time</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shop All: Extra 25% Off</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Fleece Favorites: Ends 12.7</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Best Sellers</a>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>Gifts</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>The Most Iconic Gifts</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Gifts Cards</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Stocking Stuffers</a>
                                                </div>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>New & Featured</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>New Arrivals</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Best Sellers</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Only at Nike</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>New & Upcomming Drops</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>SNKRS Lunch Calendar</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Dunk the Halls</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>NEW: Nike Refurbished</a>
                                                </div>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>Shop Icons</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Air Jordan 1</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Air Jordan</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Dunk</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Air Max</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Blazer</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Pegasus</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Metcom</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>LeBron</a>
                                                </div>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <>
                                                        <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>New For Men</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shoes</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Clothing</a>
                                                    </>
                                                    <>
                                                        <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>New For Women</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shoes</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Clothing</a>
                                                    </>
                                                    <>
                                                        <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>New For Kids</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shoes</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Clothing</a>
                                                    </>
                                                </div>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>Jordan</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shop All</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Latest in Jordan</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Jordan 11 and More</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Complete the Fit with Jordan</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Men</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Women</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Kids</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Basketball</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='pre-desktop-menu-item d-lg-ib d-sm-h is-static is-header'>
                                        <Link to='#' className='pre-desktop-menu-link'>Women</Link>
                                        <div className='pre-desktop-menu-dropdown  bg-white p10-sm pt4-sm ncss-container'>
                                            <div className='pre-columns-container'>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>Limited Time</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shop All: Extra 25% Off</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Fleece Favorites: Ends 12.7</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Best Sellers</a>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>Gifts</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>The Most Iconic Gifts</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Gifts Cards</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Stocking Stuffers</a>
                                                </div>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>New & Featured</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>New Arrivals</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Best Sellers</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Only at Nike</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>New & Upcomming Drops</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>SNKRS Lunch Calendar</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Dunk the Halls</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>NEW: Nike Refurbished</a>
                                                </div>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>Shop Icons</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Air Jordan 1</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Air Jordan</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Dunk</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Air Max</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Blazer</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Pegasus</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Metcom</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>LeBron</a>
                                                </div>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <>
                                                        <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>New For Men</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shoes</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Clothing</a>
                                                    </>
                                                    <>
                                                        <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>New For Women</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shoes</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Clothing</a>
                                                    </>
                                                    <>
                                                        <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>New For Kids</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shoes</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Clothing</a>
                                                    </>
                                                </div>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>Jordan</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shop All</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Latest in Jordan</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Jordan 11 and More</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Complete the Fit with Jordan</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Men</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Women</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Kids</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Basketball</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='pre-desktop-menu-item d-lg-ib d-sm-h is-static is-header'>
                                        <Link to='#' className='pre-desktop-menu-link'>Kids</Link>
                                        <div className='pre-desktop-menu-dropdown  bg-white p10-sm pt4-sm ncss-container'>
                                            <div className='pre-columns-container'>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>Limited Time</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shop All: Extra 25% Off</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Fleece Favorites: Ends 12.7</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Best Sellers</a>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>Gifts</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>The Most Iconic Gifts</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Gifts Cards</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Stocking Stuffers</a>
                                                </div>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>New & Featured</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>New Arrivals</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Best Sellers</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Only at Nike</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>New & Upcomming Drops</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>SNKRS Lunch Calendar</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Dunk the Halls</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>NEW: Nike Refurbished</a>
                                                </div>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>Shop Icons</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Air Jordan 1</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Air Jordan</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Dunk</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Air Max</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Blazer</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Pegasus</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Metcom</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>LeBron</a>
                                                </div>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <>
                                                        <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>New For Men</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shoes</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Clothing</a>
                                                    </>
                                                    <>
                                                        <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>New For Women</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shoes</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Clothing</a>
                                                    </>
                                                    <>
                                                        <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>New For Kids</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shoes</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Clothing</a>
                                                    </>
                                                </div>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>Jordan</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shop All</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Latest in Jordan</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Jordan 11 and More</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Complete the Fit with Jordan</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Men</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Women</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Kids</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Basketball</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='pre-desktop-menu-item d-lg-ib d-sm-h is-static is-header'>
                                        <Link to='#' className='pre-desktop-menu-link'>Accesories</Link>
                                        <div className='pre-desktop-menu-dropdown  bg-white p10-sm pt4-sm ncss-container'>
                                            <div className='pre-columns-container'>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>Limited Time</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shop All: Extra 25% Off</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Fleece Favorites: Ends 12.7</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Best Sellers</a>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>Gifts</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>The Most Iconic Gifts</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Gifts Cards</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Stocking Stuffers</a>
                                                </div>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>New & Featured</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>New Arrivals</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Best Sellers</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Only at Nike</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>New & Upcomming Drops</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>SNKRS Lunch Calendar</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Dunk the Halls</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>NEW: Nike Refurbished</a>
                                                </div>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>Shop Icons</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Air Jordan 1</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Air Jordan</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Dunk</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Air Max</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Blazer</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Pegasus</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Metcom</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>LeBron</a>
                                                </div>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <>
                                                        <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>New For Men</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shoes</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Clothing</a>
                                                    </>
                                                    <>
                                                        <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>New For Women</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shoes</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Clothing</a>
                                                    </>
                                                    <>
                                                        <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>New For Kids</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shoes</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Clothing</a>
                                                    </>
                                                </div>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>Jordan</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shop All</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Latest in Jordan</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Jordan 11 and More</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Complete the Fit with Jordan</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Men</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Women</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Kids</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Basketball</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='pre-desktop-menu-item d-lg-ib d-sm-h is-static is-header'>
                                        <Link to='#' className='pre-desktop-menu-link'>Sales</Link>
                                        <div className='pre-desktop-menu-dropdown  bg-white p10-sm pt4-sm ncss-container'>
                                            <div className='pre-columns-container'>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>Limited Time</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shop All: Extra 25% Off</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Fleece Favorites: Ends 12.7</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Best Sellers</a>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>Gifts</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>The Most Iconic Gifts</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Gifts Cards</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Stocking Stuffers</a>
                                                </div>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>New & Featured</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>New Arrivals</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Best Sellers</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Only at Nike</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>New & Upcomming Drops</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>SNKRS Lunch Calendar</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Dunk the Halls</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>NEW: Nike Refurbished</a>
                                                </div>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>Shop Icons</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Air Jordan 1</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Air Jordan</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Dunk</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Air Max</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Blazer</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Pegasus</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Metcom</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>LeBron</a>
                                                </div>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <>
                                                        <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>New For Men</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shoes</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Clothing</a>
                                                    </>
                                                    <>
                                                        <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>New For Women</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shoes</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Clothing</a>
                                                    </>
                                                    <>
                                                        <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>New For Kids</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shoes</a>
                                                        <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Clothing</a>
                                                    </>
                                                </div>
                                                <div className='pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h'>
                                                    <a href="#" className='pre-menu-item is-header d-sm-h is-static is-header headline-5'>Jordan</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Shop All</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Latest in Jordan</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Jordan 11 and More</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Complete the Fit with Jordan</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Men</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Women</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Kids</a>
                                                    <a href="#" className='pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary'>Basketball</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="pre-l-search" data-pre="VisualSearch">
                        <div className="pre-l-search-box">
                            <div className="d-sm-flx flx-jc-lg-fe u-position-rel">
                                <div className="pre-search-contain">
                                    <div className="pre-search-input-box d-sm-b flx-dir-lg-c flx-ai-lg-fe d-lg-flx flx-gro-sm-1 flx-gro-lg-0" type="search">
                                        <input type="text" id="VisualSearchInput" className="pre-search-input headline-5" name="search" data-var="vsInput" tabindex="0" placeholder="Search" aria-label="Search Products" role="combobox" aria-controls="VisualSearchSuggestionsList" aria-owns="VisualSearchSuggestionsList" aria-expanded="false" />
                                        <button className="pre-clear-search ncss-btn pr0-sm z2 d-sm-h" data-var="vsClearSearch" aria-label="Reset Search" type="click_searchClear">
                                            <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                                <path stroke="currentColor" d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945"></path>
                                            </svg>
                                        </button>
                                        <button className="pre-search-btn ripple" data-var="vsButton" aria-label="Open Search Modal" data-search-closed-label="Search" data-search-open-label="Open Search Modal">
                                            <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                                <path stroke="currentColor" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <button type="submit" className="pre-close-search ncss-cta-primary-dark btn-lg" data-var="vsCloseSearch" aria-label="Cancel">Cancel</button>
                                </div>
                            </div>
                            <div className="pre-l-vs-box ta-sm-l" data-var="vsContainer">
                                <div className="pre-l-vs-popular pl9-sm pr5-sm prl0-lg mauto-sm" data-var="vsPopularTerms" data-pre="VisualSearchPopularTerms">
                                    <p className="headline-5 text-color-secondary pb4-sm">
                                        <span id="hf_header_label_popular_search_terms">Popular Search Terms</span></p>
                                    <ul>
                                        <li><a tabindex="0" rel="nofollow" data-type="click_popularSearchSelection" data-path="Air Force 1" href="https://www.nike.com/w/air-force-1-shoes-5sj3yzy7ok?vst=Air%20Force%201" className="pre-l-vs-popular-term ncss-cta-primary-dark ta-sm-l d-sm-b mb3-sm" data-pre="ILink">Air Force 1</a>
                                        </li>
                                        <li>
                                            <a tabindex="0" rel="nofollow" data-type="click_popularSearchSelection" data-path="Jordan" href="https://www.nike.com/w/jordan-37eef?vst=Jordan" className="pre-l-vs-popular-term ncss-cta-primary-dark ta-sm-l d-sm-b mb3-sm" data-pre="ILink">Jordan</a>
                                        </li>
                                        <li>
                                            <a tabindex="0" rel="nofollow" data-type="click_popularSearchSelection" data-path="Air Max" href="https://www.nike.com/w/air-max-shoes-a6d8hzy7ok?vst=Air%20Max" className="pre-l-vs-popular-term ncss-cta-primary-dark ta-sm-l d-sm-b mb3-sm" data-pre="ILink">Air Max</a></li>
                                        <li><a tabindex="0" rel="nofollow" data-type="click_popularSearchSelection" data-path="Blazer" href="https://www.nike.com/w/blazer-shoes-9gw3azy7ok?vst=Blazer" className="pre-l-vs-popular-term ncss-cta-primary-dark ta-sm-l d-sm-b mb3-sm" data-pre="ILink">Blazer</a></li>
                                    </ul>
                                </div>
                                <div className="pre-l-vs-overlay bg-white u-full-width flx-dir-lg-r z1 pre-visually-hidden" data-var="VisualSearchOverlay" data-pre="VisualSearchOverlay"><div className="pre-l-vs-suggestions va-sm-t pl9-sm pr5-sm pl0-lg flx-dir-sm-c"><p className="headline-5 text-color-secondary pb4-sm"><span id="hf_header_label_search_topSuggestions">Top Suggestions</span></p><ul id="VisualSearchSuggestionsList" data-var="vsSuggestionList" role="listbox" data-pre="VisualSearchSuggestionList"></ul>
                                </div>
                                    <div className="pre-vs-spinner">
                                        <div className="pre-spinner" data-var="vsSpinner">
                                        </div>
                                    </div>
                                    <ul className="pre-l-vs-results bg-white pt12-sm pt0-lg mb12-sm d-sm-flx flx-dir-sm-r flx-wr-sm-w flx-wr-lg-nw" data-var="VisualSearchResults" aria-live="assertive" data-pre="VisualSearchResults">
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pre-acct-btn-group pt2-sm pt3-lg d-sm-ib ta-sm-r flx-gro-sm-1 flx-gro-lg-0" data-pre="HeaderButtonGroup">
                    <a aria-label="Favorites" title="Favorites" data-var="favoritesLink" data-type="click_navShortcut" data-path="favorites" href="https://www.nike.com/favorites" className="pre-btn-header ripple mr3-sm d-sm-h d-lg-ib" data-pre="ILink">
                        <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451">
                            </path>
                        </svg>
                    </a>
                    <div id="nav-cart" className="pre-acct-cart mr2-sm mr0-lg d-sm-ib" data-pre="Cart">
                        <a data-var="anchor" title="Bag Items: 0" aria-label="Bag Items: 0" rel="nofollow" data-type="click_navCart" data-path="cart" href="https://www.nike.com/cart" className="icon-btn ripple d-sm-b" data-pre="ILink">
                            <div>
                                <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                    <path stroke="currentColor" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5">
                                    </path>
                                </svg>
                                <span className="pre-jewel pre-cart-jewel text-color-primary-dark"
                                    // style="visibility:hidden"
                                    data-var="jewel"
                                >0</span>
                            </div>
                        </a>
                    </div>
                    {/* <a aria-label="Sign In" data-var="mobileProfileIcon" data-type="click_navMembership" data-path="sign in" href="#" className="pre-btn-icon mr2-sm" data-pre="ILink" role="button">
                        <div className="pre-avatar" data-pre="Avatar">
                            <div className="d-sm-flx flx-ai-sm-c">
                                <div className="icon-btn ripple">
                                    <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none" data-var="glyph" style="display: inline-block;">
                                        <path fill="currentColor" d="M12 3a4.5 4.5 0 00-4.5 4.5H9a3 3 0 013-3V3zM7.5 7.5A4.5 4.5 0 0012 12v-1.5a3 3 0 01-3-3H7.5zM12 12a4.5 4.5 0 004.5-4.5H15a3 3 0 01-3 3V12zm4.5-4.5A4.5 4.5 0 0012 3v1.5a3 3 0 013 3h1.5zM4.5 21v-3H3v3h1.5zm0-3a3 3 0 013-3v-1.5A4.5 4.5 0 003 18h1.5zm3-3h9v-1.5h-9V15zm9 0a3 3 0 013 3H21a4.5 4.5 0 00-4.5-4.5V15zm3 3v3H21v-3h-1.5z">
                                        </path>
                                    </svg>
                                    <img alt="Avatar" src="" className="pre-avatar-image va-sm-m" style="display:none" data-var="img" />
                                </div>
                            </div>
                        </div>
                    </a> */}
                    {/* <button data-var="mobileButton" id="MobileMenuButton" aria-haspopup="true" aria-expanded="false" aria-label="menu" className="pre-btn-icon ripple d-sm-ib d-lg-h">
                        <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" d="M21 5.25H3M21 12H3m18 6.75H3">
                            </path>
                        </svg>
                    </button> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar