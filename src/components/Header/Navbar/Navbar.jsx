import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom';
import Nike from '../../../assets/logos/nike.svg'

const Navbar = () => {
    const handleSubmit = () => { console.log('submit') }
    const handleChange = () => { console.log('change') }

    return (
        <div className='pre-l-header'>
            <div className="pre-l-wrapper">
                <div className='pre-l-logo'>
                    <Link to={'/'} className='pre-logo-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="pre-logo-svg" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd"></path></svg>
                    </Link>
                </div>
                <div className='pre-l-nav-box'>
                    <nav className='pre-l-nav'>
                        <div className="pre-l-desktop-menu">
                            <div className="pt1-lg">
                                <ul className='pre-desktop-menu'>
                                    <li className='pre-desktop-menu-item'>
                                        <Link to='#' className='pre-desktop-menu-link headline-5'>New & Featured</Link>
                                        <div className='pre-desktop-menu-dropdown'>
                                            <div className="pre-column-container">
                                                <div className='pre-menu-column'>
                                                    <h3>Limited Time</h3>
                                                    <a href="#">Shop All: Extra 25% Off</a>
                                                    <a href="#">Fleece Favorites: Ends 12.7</a>
                                                    <a href="#">Best Sellers</a>
                                                    <h3>Gifts</h3>
                                                    <a href="#">The Most Iconic Gifts</a>
                                                    <a href="#">Gifts Cards</a>
                                                    <a href="#">Stocking Stuffers</a>
                                                </div>
                                                <div className='pre-menu-column'>
                                                    <h3>New & Featured</h3>
                                                    <a href="#">New Arrivals</a>
                                                    <a href="#">Best Sellers</a>
                                                    <a href="#">Only at Nike</a>
                                                    <a href="#">New & Upcomming Drops</a>
                                                    <a href="#">SNKRS Lunch Calendar</a>
                                                    <a href="#">Dunk the Halls</a>
                                                    <a href="#">NEW: Nike Refurbished</a>
                                                </div>
                                                <div className='pre-menu-column'>
                                                    <h3>Shop Icons</h3>
                                                    <a href="#">Air Jordan 1</a>
                                                    <a href="#">Air Jordan</a>
                                                    <a href="#">Dunk</a>
                                                    <a href="#">Air Max</a>
                                                    <a href="#">Blazer</a>
                                                    <a href="#">Pegasus</a>
                                                    <a href="#">Metcom</a>
                                                    <a href="#">LeBron</a>
                                                </div>
                                                <div className='pre-menu-column'>
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
                                                </div>
                                                <div className='pre-menu-column'>
                                                    <h3>Jordan</h3>
                                                    <a href="#">Shop All</a>
                                                    <a href="#">Latest in Jordan</a>
                                                    <a href="#">Jordan 11 and More</a>
                                                    <a href="#">Complete the Fit with Jordan</a>
                                                    <a href="#">Men</a>
                                                    <a href="#">Women</a>
                                                    <a href="#">Kids</a>
                                                    <a href="#">Basketball</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='pre-desktop-menu-item'>
                                        <Link to='#' className='pre-desktop-menu-link'>Men</Link>
                                        <div className='pre-desktop-menu-dropdown'>
                                            <div className='pre-column-container'>
                                                <div className='pre-menu-column'>
                                                    <h3>Limited Time</h3>
                                                    <a href="#">Shop All: Extra 25% Off</a>
                                                    <a href="#">Fleece Favorites: Ends 12.7</a>
                                                    <a href="#">Best Sellers</a>
                                                    <h3>Gifts</h3>
                                                    <a href="#">The Most Iconic Gifts</a>
                                                    <a href="#">Gifts Cards</a>
                                                    <a href="#">Stocking Stuffers</a>
                                                </div>
                                                <div className='pre-menu-column'>
                                                    <h3>New & Featured</h3>
                                                    <a href="#">New Arrivals</a>
                                                    <a href="#">Best Sellers</a>
                                                    <a href="#">Only at Nike</a>
                                                    <a href="#">New & Upcomming Drops</a>
                                                    <a href="#">SNKRS Lunch Calendar</a>
                                                    <a href="#">Dunk the Halls</a>
                                                    <a href="#">NEW: Nike Refurbished</a>
                                                </div>
                                                <div className='pre-menu-column'>
                                                    <h3>Shop Icons</h3>
                                                    <a href="#">Air Jordan 1</a>
                                                    <a href="#">Air Jordan</a>
                                                    <a href="#">Dunk</a>
                                                    <a href="#">Air Max</a>
                                                    <a href="#">Blazer</a>
                                                    <a href="#">Pegasus</a>
                                                    <a href="#">Metcom</a>
                                                    <a href="#">LeBron</a>
                                                </div>
                                                <div className='pre-menu-column'>
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
                                                </div>
                                                <div className='pre-menu-column'>
                                                    <h3>Jordan</h3>
                                                    <a href="#">Shop All</a>
                                                    <a href="#">Latest in Jordan</a>
                                                    <a href="#">Jordan 11 and More</a>
                                                    <a href="#">Complete the Fit with Jordan</a>
                                                    <a href="#">Men</a>
                                                    <a href="#">Women</a>
                                                    <a href="#">Kids</a>
                                                    <a href="#">Basketball</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='pre-desktop-menu-item'>
                                        <Link to='#' className='pre-desktop-menu-link'>Women</Link>
                                        <div className='pre-desktop-menu-dropdown'>
                                            <div className='pre-column-container'>
                                                <div className='pre-menu-column'>
                                                    <h3>Limited Time</h3>
                                                    <a href="#">Shop All: Extra 25% Off</a>
                                                    <a href="#">Fleece Favorites: Ends 12.7</a>
                                                    <a href="#">Best Sellers</a>
                                                    <h3>Gifts</h3>
                                                    <a href="#">The Most Iconic Gifts</a>
                                                    <a href="#">Gifts Cards</a>
                                                    <a href="#">Stocking Stuffers</a>
                                                </div>
                                                <div className='pre-menu-column'>
                                                    <h3>New & Featured</h3>
                                                    <a href="#">New Arrivals</a>
                                                    <a href="#">Best Sellers</a>
                                                    <a href="#">Only at Nike</a>
                                                    <a href="#">New & Upcomming Drops</a>
                                                    <a href="#">SNKRS Lunch Calendar</a>
                                                    <a href="#">Dunk the Halls</a>
                                                    <a href="#">NEW: Nike Refurbished</a>
                                                </div>
                                                <div className='pre-menu-column'>
                                                    <h3>Shop Icons</h3>
                                                    <a href="#">Air Jordan 1</a>
                                                    <a href="#">Air Jordan</a>
                                                    <a href="#">Dunk</a>
                                                    <a href="#">Air Max</a>
                                                    <a href="#">Blazer</a>
                                                    <a href="#">Pegasus</a>
                                                    <a href="#">Metcom</a>
                                                    <a href="#">LeBron</a>
                                                </div>
                                                <div className='pre-menu-column'>
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
                                                </div>
                                                <div className='pre-menu-column'>
                                                    <h3>Jordan</h3>
                                                    <a href="#">Shop All</a>
                                                    <a href="#">Latest in Jordan</a>
                                                    <a href="#">Jordan 11 and More</a>
                                                    <a href="#">Complete the Fit with Jordan</a>
                                                    <a href="#">Men</a>
                                                    <a href="#">Women</a>
                                                    <a href="#">Kids</a>
                                                    <a href="#">Basketball</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='pre-desktop-menu-item'>
                                        <Link to='#' className='pre-desktop-menu-link'>Kids</Link>
                                        <div className='pre-desktop-menu-dropdown'>
                                            <div className='pre-column-container'>
                                                <div className='pre-menu-column'>
                                                    <h3>Limited Time</h3>
                                                    <a href="#">Shop All: Extra 25% Off</a>
                                                    <a href="#">Fleece Favorites: Ends 12.7</a>
                                                    <a href="#">Best Sellers</a>
                                                    <h3>Gifts</h3>
                                                    <a href="#">The Most Iconic Gifts</a>
                                                    <a href="#">Gifts Cards</a>
                                                    <a href="#">Stocking Stuffers</a>
                                                </div>
                                                <div className='pre-menu-column'>
                                                    <h3>New & Featured</h3>
                                                    <a href="#">New Arrivals</a>
                                                    <a href="#">Best Sellers</a>
                                                    <a href="#">Only at Nike</a>
                                                    <a href="#">New & Upcomming Drops</a>
                                                    <a href="#">SNKRS Lunch Calendar</a>
                                                    <a href="#">Dunk the Halls</a>
                                                    <a href="#">NEW: Nike Refurbished</a>
                                                </div>
                                                <div className='pre-menu-column'>
                                                    <h3>Shop Icons</h3>
                                                    <a href="#">Air Jordan 1</a>
                                                    <a href="#">Air Jordan</a>
                                                    <a href="#">Dunk</a>
                                                    <a href="#">Air Max</a>
                                                    <a href="#">Blazer</a>
                                                    <a href="#">Pegasus</a>
                                                    <a href="#">Metcom</a>
                                                    <a href="#">LeBron</a>
                                                </div>
                                                <div className='pre-menu-column'>
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
                                                </div>
                                                <div className='pre-menu-column'>
                                                    <h3>Jordan</h3>
                                                    <a href="#">Shop All</a>
                                                    <a href="#">Latest in Jordan</a>
                                                    <a href="#">Jordan 11 and More</a>
                                                    <a href="#">Complete the Fit with Jordan</a>
                                                    <a href="#">Men</a>
                                                    <a href="#">Women</a>
                                                    <a href="#">Kids</a>
                                                    <a href="#">Basketball</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='pre-desktop-menu-item'>
                                        <Link to='#' className='pre-desktop-menu-link'>Accesories</Link>
                                        <div className='pre-desktop-menu-dropdown'>
                                            <div className='pre-column-container'>
                                                <div className='pre-menu-column'>
                                                    <h3>Limited Time</h3>
                                                    <a href="#">Shop All: Extra 25% Off</a>
                                                    <a href="#">Fleece Favorites: Ends 12.7</a>
                                                    <a href="#">Best Sellers</a>
                                                    <h3>Gifts</h3>
                                                    <a href="#">The Most Iconic Gifts</a>
                                                    <a href="#">Gifts Cards</a>
                                                    <a href="#">Stocking Stuffers</a>
                                                </div>
                                                <div className='pre-menu-column'>
                                                    <h3>New & Featured</h3>
                                                    <a href="#">New Arrivals</a>
                                                    <a href="#">Best Sellers</a>
                                                    <a href="#">Only at Nike</a>
                                                    <a href="#">New & Upcomming Drops</a>
                                                    <a href="#">SNKRS Lunch Calendar</a>
                                                    <a href="#">Dunk the Halls</a>
                                                    <a href="#">NEW: Nike Refurbished</a>
                                                </div>
                                                <div className='pre-menu-column'>
                                                    <h3>Shop Icons</h3>
                                                    <a href="#">Air Jordan 1</a>
                                                    <a href="#">Air Jordan</a>
                                                    <a href="#">Dunk</a>
                                                    <a href="#">Air Max</a>
                                                    <a href="#">Blazer</a>
                                                    <a href="#">Pegasus</a>
                                                    <a href="#">Metcom</a>
                                                    <a href="#">LeBron</a>
                                                </div>
                                                <div className='pre-menu-column'>
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
                                                </div>
                                                <div className='pre-menu-column'>
                                                    <h3>Jordan</h3>
                                                    <a href="#">Shop All</a>
                                                    <a href="#">Latest in Jordan</a>
                                                    <a href="#">Jordan 11 and More</a>
                                                    <a href="#">Complete the Fit with Jordan</a>
                                                    <a href="#">Men</a>
                                                    <a href="#">Women</a>
                                                    <a href="#">Kids</a>
                                                    <a href="#">Basketball</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='pre-desktop-menu-item'>
                                        <Link to='#' className='pre-desktop-menu-link'>Sales</Link>
                                        <div className='pre-desktop-menu-dropdown'>
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
                            </div>
                        </div>
                    </nav>
                </div>
                {/* <div> */}
                <form onSubmit={handleSubmit}>
                    <button type='submit'>
                        <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path></svg>
                    </button>
                    <input type="text" placeholder='Search' onChange={handleChange} />
                </form>
                <div>
                    <Link to='#'>
                        <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg>
                    </Link>
                    <Link to='#'>
                        <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
                    </Link>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Navbar