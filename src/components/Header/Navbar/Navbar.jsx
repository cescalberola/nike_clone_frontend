import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import Nike from '../../../assets/logos/nike.svg'

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <>
                    <Link><img src={Nike} alt="nike" /></Link>
                </>
                <>
                    <ul>
                        <li>
                            <Link to='#'><h3>New & Featured</h3></Link>
                            <div className='drop-down'>
                                <>
                                    <h3>Limited Time</h3>
                                    <a href="#">Shop All: Extra 25% Off</a>
                                    <a href="#">Fleece Favorites: Ends 12.7</a>
                                    <a href="#">Best Sellers</a>
                                    <h3>Gifts</h3>
                                    <a href="#">The Most Iconic Gifts</a>
                                    <a href="#">Gifts Cards</a>
                                    <a href="#">Stocking Stuffers</a>
                                </>
                                <>
                                    <h3>New & Featured</h3>
                                    <a href="#">New Arrivals</a>
                                    <a href="#">Best Sellers</a>
                                    <a href="#">Only at Nike</a>
                                    <a href="#">New & Upcomming Drops</a>
                                    <a href="#">SNKRS Lunch Calendar</a>
                                    <a href="#">Dunk the Halls</a>
                                    <a href="#">NEW: Nike Refurbished</a>
                                </>
                                <>
                                    <h3>Shop Icons</h3>
                                    <a href="#">Air Jordan 1</a>
                                    <a href="#">Air Jordan</a>
                                    <a href="#">Dunk</a>
                                    <a href="#">Air Max</a>
                                    <a href="#">Blazer</a>
                                    <a href="#">Pegasus</a>
                                    <a href="#">Metcom</a>
                                    <a href="#">LeBron</a>
                                </>
                                <>
                                    <>
                                        <h3>New For Men</h3>
                                        <a href="#">Shoes</a>
                                        <a href="#">Clothing</a>
                                    </>
                                    <>
                                        <h3>New For Women</h3>
                                        <a href="#">Shoes</a>
                                        <a href="#">Clothing</a>
                                    </>
                                    <>
                                        <h3>New For Kids</h3>
                                        <a href="#">Shoes</a>
                                        <a href="#">Clothing</a>
                                    </>
                                </>
                                <>
                                    <h3>Jordan</h3>
                                    <a href="#">Shop All</a>
                                    <a href="#">Latest in Jordan</a>
                                    <a href="#">Jordan 11 and More</a>
                                    <a href="#">Complete the Fit with Jordan</a>
                                    <a href="#">Men</a>
                                    <a href="#">Women</a>
                                    <a href="#">Kids</a>
                                    <a href="#">Basketball</a>
                                </>
                            </div>
                        </li>
                        <li>
                            <Link to='#'><h3>Men</h3></Link>
                            <div className='drop-down'>
                                <>
                                    <h3>Limited Time</h3>
                                    <a href="#">Shop All: Extra 25% Off</a>
                                    <a href="#">Fleece Favorites: Ends 12.7</a>
                                    <a href="#">Best Sellers</a>
                                    <h3>Gifts</h3>
                                    <a href="#">The Most Iconic Gifts</a>
                                    <a href="#">Gifts Cards</a>
                                    <a href="#">Stocking Stuffers</a>
                                </>
                                <>
                                    <h3>New & Featured</h3>
                                    <a href="#">New Arrivals</a>
                                    <a href="#">Best Sellers</a>
                                    <a href="#">Only at Nike</a>
                                    <a href="#">New & Upcomming Drops</a>
                                    <a href="#">SNKRS Lunch Calendar</a>
                                    <a href="#">Dunk the Halls</a>
                                    <a href="#">NEW: Nike Refurbished</a>
                                </>
                                <>
                                    <h3>Shop Icons</h3>
                                    <a href="#">Air Jordan 1</a>
                                    <a href="#">Air Jordan</a>
                                    <a href="#">Dunk</a>
                                    <a href="#">Air Max</a>
                                    <a href="#">Blazer</a>
                                    <a href="#">Pegasus</a>
                                    <a href="#">Metcom</a>
                                    <a href="#">LeBron</a>
                                </>
                                <>
                                    <>
                                        <h3>New For Men</h3>
                                        <a href="#">Shoes</a>
                                        <a href="#">Clothing</a>
                                    </>
                                    <>
                                        <h3>New For Women</h3>
                                        <a href="#">Shoes</a>
                                        <a href="#">Clothing</a>
                                    </>
                                    <>
                                        <h3>New For Kids</h3>
                                        <a href="#">Shoes</a>
                                        <a href="#">Clothing</a>
                                    </>
                                </>
                                <>
                                    <h3>Jordan</h3>
                                    <a href="#">Shop All</a>
                                    <a href="#">Latest in Jordan</a>
                                    <a href="#">Jordan 11 and More</a>
                                    <a href="#">Complete the Fit with Jordan</a>
                                    <a href="#">Men</a>
                                    <a href="#">Women</a>
                                    <a href="#">Kids</a>
                                    <a href="#">Basketball</a>
                                </>
                            </div>
                        </li>
                        <li>
                            <Link to='#'><h3>Women</h3></Link>
                            <div className='drop-down'>
                                <>
                                    <h3>Limited Time</h3>
                                    <a href="#">Shop All: Extra 25% Off</a>
                                    <a href="#">Fleece Favorites: Ends 12.7</a>
                                    <a href="#">Best Sellers</a>
                                    <h3>Gifts</h3>
                                    <a href="#">The Most Iconic Gifts</a>
                                    <a href="#">Gifts Cards</a>
                                    <a href="#">Stocking Stuffers</a>
                                </>
                                <>
                                    <h3>New & Featured</h3>
                                    <a href="#">New Arrivals</a>
                                    <a href="#">Best Sellers</a>
                                    <a href="#">Only at Nike</a>
                                    <a href="#">New & Upcomming Drops</a>
                                    <a href="#">SNKRS Lunch Calendar</a>
                                    <a href="#">Dunk the Halls</a>
                                    <a href="#">NEW: Nike Refurbished</a>
                                </>
                                <>
                                    <h3>Shop Icons</h3>
                                    <a href="#">Air Jordan 1</a>
                                    <a href="#">Air Jordan</a>
                                    <a href="#">Dunk</a>
                                    <a href="#">Air Max</a>
                                    <a href="#">Blazer</a>
                                    <a href="#">Pegasus</a>
                                    <a href="#">Metcom</a>
                                    <a href="#">LeBron</a>
                                </>
                                <>
                                    <>
                                        <h3>New For Men</h3>
                                        <a href="#">Shoes</a>
                                        <a href="#">Clothing</a>
                                    </>
                                    <>
                                        <h3>New For Women</h3>
                                        <a href="#">Shoes</a>
                                        <a href="#">Clothing</a>
                                    </>
                                    <>
                                        <h3>New For Kids</h3>
                                        <a href="#">Shoes</a>
                                        <a href="#">Clothing</a>
                                    </>
                                </>
                                <>
                                    <h3>Jordan</h3>
                                    <a href="#">Shop All</a>
                                    <a href="#">Latest in Jordan</a>
                                    <a href="#">Jordan 11 and More</a>
                                    <a href="#">Complete the Fit with Jordan</a>
                                    <a href="#">Men</a>
                                    <a href="#">Women</a>
                                    <a href="#">Kids</a>
                                    <a href="#">Basketball</a>
                                </>
                            </div>
                        </li>
                        <li>
                            <Link to='#'><h3>Kids</h3></Link>
                            <div className='drop-down'>
                                <>
                                    <h3>Limited Time</h3>
                                    <a href="#">Shop All: Extra 25% Off</a>
                                    <a href="#">Fleece Favorites: Ends 12.7</a>
                                    <a href="#">Best Sellers</a>
                                    <h3>Gifts</h3>
                                    <a href="#">The Most Iconic Gifts</a>
                                    <a href="#">Gifts Cards</a>
                                    <a href="#">Stocking Stuffers</a>
                                </>
                                <>
                                    <h3>New & Featured</h3>
                                    <a href="#">New Arrivals</a>
                                    <a href="#">Best Sellers</a>
                                    <a href="#">Only at Nike</a>
                                    <a href="#">New & Upcomming Drops</a>
                                    <a href="#">SNKRS Lunch Calendar</a>
                                    <a href="#">Dunk the Halls</a>
                                    <a href="#">NEW: Nike Refurbished</a>
                                </>
                                <>
                                    <h3>Shop Icons</h3>
                                    <a href="#">Air Jordan 1</a>
                                    <a href="#">Air Jordan</a>
                                    <a href="#">Dunk</a>
                                    <a href="#">Air Max</a>
                                    <a href="#">Blazer</a>
                                    <a href="#">Pegasus</a>
                                    <a href="#">Metcom</a>
                                    <a href="#">LeBron</a>
                                </>
                                <>
                                    <>
                                        <h3>New For Men</h3>
                                        <a href="#">Shoes</a>
                                        <a href="#">Clothing</a>
                                    </>
                                    <>
                                        <h3>New For Women</h3>
                                        <a href="#">Shoes</a>
                                        <a href="#">Clothing</a>
                                    </>
                                    <>
                                        <h3>New For Kids</h3>
                                        <a href="#">Shoes</a>
                                        <a href="#">Clothing</a>
                                    </>
                                </>
                                <>
                                    <h3>Jordan</h3>
                                    <a href="#">Shop All</a>
                                    <a href="#">Latest in Jordan</a>
                                    <a href="#">Jordan 11 and More</a>
                                    <a href="#">Complete the Fit with Jordan</a>
                                    <a href="#">Men</a>
                                    <a href="#">Women</a>
                                    <a href="#">Kids</a>
                                    <a href="#">Basketball</a>
                                </>
                            </div>
                        </li>
                        <li>
                            <Link to='#'><h3>Accesories</h3></Link>
                            <div className='drop-down'>
                                <>
                                    <h3>Limited Time</h3>
                                    <a href="#">Shop All: Extra 25% Off</a>
                                    <a href="#">Fleece Favorites: Ends 12.7</a>
                                    <a href="#">Best Sellers</a>
                                    <h3>Gifts</h3>
                                    <a href="#">The Most Iconic Gifts</a>
                                    <a href="#">Gifts Cards</a>
                                    <a href="#">Stocking Stuffers</a>
                                </>
                                <>
                                    <h3>New & Featured</h3>
                                    <a href="#">New Arrivals</a>
                                    <a href="#">Best Sellers</a>
                                    <a href="#">Only at Nike</a>
                                    <a href="#">New & Upcomming Drops</a>
                                    <a href="#">SNKRS Lunch Calendar</a>
                                    <a href="#">Dunk the Halls</a>
                                    <a href="#">NEW: Nike Refurbished</a>
                                </>
                                <>
                                    <h3>Shop Icons</h3>
                                    <a href="#">Air Jordan 1</a>
                                    <a href="#">Air Jordan</a>
                                    <a href="#">Dunk</a>
                                    <a href="#">Air Max</a>
                                    <a href="#">Blazer</a>
                                    <a href="#">Pegasus</a>
                                    <a href="#">Metcom</a>
                                    <a href="#">LeBron</a>
                                </>
                                <>
                                    <>
                                        <h3>New For Men</h3>
                                        <a href="#">Shoes</a>
                                        <a href="#">Clothing</a>
                                    </>
                                    <>
                                        <h3>New For Women</h3>
                                        <a href="#">Shoes</a>
                                        <a href="#">Clothing</a>
                                    </>
                                    <>
                                        <h3>New For Kids</h3>
                                        <a href="#">Shoes</a>
                                        <a href="#">Clothing</a>
                                    </>
                                </>
                                <>
                                    <h3>Jordan</h3>
                                    <a href="#">Shop All</a>
                                    <a href="#">Latest in Jordan</a>
                                    <a href="#">Jordan 11 and More</a>
                                    <a href="#">Complete the Fit with Jordan</a>
                                    <a href="#">Men</a>
                                    <a href="#">Women</a>
                                    <a href="#">Kids</a>
                                    <a href="#">Basketball</a>
                                </>
                            </div>
                        </li>
                        <li>
                            <Link to='#'><h3>Sales</h3></Link>
                            <div className='drop-down'>
                                <>
                                    <h3>Limited Time</h3>
                                    <a href="#">Shop All: Extra 25% Off</a>
                                    <a href="#">Fleece Favorites: Ends 12.7</a>
                                    <a href="#">Best Sellers</a>
                                    <h3>Gifts</h3>
                                    <a href="#">The Most Iconic Gifts</a>
                                    <a href="#">Gifts Cards</a>
                                    <a href="#">Stocking Stuffers</a>
                                </>
                                <>
                                    <h3>New & Featured</h3>
                                    <a href="#">New Arrivals</a>
                                    <a href="#">Best Sellers</a>
                                    <a href="#">Only at Nike</a>
                                    <a href="#">New & Upcomming Drops</a>
                                    <a href="#">SNKRS Lunch Calendar</a>
                                    <a href="#">Dunk the Halls</a>
                                    <a href="#">NEW: Nike Refurbished</a>
                                </>
                                <>
                                    <h3>Shop Icons</h3>
                                    <a href="#">Air Jordan 1</a>
                                    <a href="#">Air Jordan</a>
                                    <a href="#">Dunk</a>
                                    <a href="#">Air Max</a>
                                    <a href="#">Blazer</a>
                                    <a href="#">Pegasus</a>
                                    <a href="#">Metcom</a>
                                    <a href="#">LeBron</a>
                                </>
                                <>
                                    <>
                                        <h3>New For Men</h3>
                                        <a href="#">Shoes</a>
                                        <a href="#">Clothing</a>
                                    </>
                                    <>
                                        <h3>New For Women</h3>
                                        <a href="#">Shoes</a>
                                        <a href="#">Clothing</a>
                                    </>
                                    <>
                                        <h3>New For Kids</h3>
                                        <a href="#">Shoes</a>
                                        <a href="#">Clothing</a>
                                    </>
                                </>
                                <>
                                    <h3>Jordan</h3>
                                    <a href="#">Shop All</a>
                                    <a href="#">Latest in Jordan</a>
                                    <a href="#">Jordan 11 and More</a>
                                    <a href="#">Complete the Fit with Jordan</a>
                                    <a href="#">Men</a>
                                    <a href="#">Women</a>
                                    <a href="#">Kids</a>
                                    <a href="#">Basketball</a>
                                </>
                            </div>
                        </li>
                    </ul>
                </>
                <>
                    <form>
                        <button>
                            <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path></svg>
                        </button>
                        <input type="text" placeholder='Search' />
                    </form>
                    <Link to='#'>
                        <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg>
                    </Link>
                    <Link to='#'>
                        <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
                    </Link>
                </>
            </nav>
            <h1>Navbar</h1>
        </>
    )
}

export default Navbar