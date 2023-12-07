import React from 'react';
import { Link } from 'react-router-dom';
import Jordan from '../../../assets/logos/jordan.svg'
import Converse from '../../../assets/logos/converse.svg';


const BrandHeader = () => {
    return (
        <div className='sub-navbar'>
            <>
                <Link><img src={Jordan} alt="jordan" /></Link>
                <Link><img src={Converse} alt="converse" /></Link>
            </>
            <>
                <Link to='#'>Nike Refurbished</Link>
                <Link to='#'>Find a Store</Link>
                <Link to='#'>Help</Link>
                <Link to='#'>Join Us</Link>
                <Link to='/login'>Sing In</Link>
            </>
        </div>

    )
}

export default BrandHeader