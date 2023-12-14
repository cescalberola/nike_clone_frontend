import React from 'react'
import './Banner.scss'
import Slider from "react-slick";
import { Link } from 'react-router-dom';


const Banner = () => {

    const bannerSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <Slider className="banner-home" {...bannerSettings}>
            <div>
                <p>Last-Minute Gifts | Save Up to 50% 🎁</p>
                <p className="p-sub">
                    No code needed. <Link to={"/products"}> Shop Now.</Link>
                </p>
            </div>
            <div>
                <p>Cold Weather Gear on Sale Now ❄️ Shop Now. Ends 12.9.</p>
                <p className="p-sub">
                    No code needed. <Link to={"/products"}> Shop Now.</Link>
                </p>
            </div>
        </Slider>)
}

export default Banner