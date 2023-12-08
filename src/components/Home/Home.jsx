import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.scss";
import NikeJordanHome from "../../assets/imgs home/Nike Jordan home.png";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Slider className="banner-home" {...settings}>
        <div>
          <p>
            New Styles Added: Extra 25% Off Sign in and use code CELEBRATE to
            save on select styles.
          </p>
        </div>
        <div>
          <p>Cold Weather Gear on Sale Now ❄️ Shop Now. Ends 12.9.</p>
        </div>
      </Slider>
      <div className="home">
        <h2>Home</h2>
        <div className="home-img">
          <img src={NikeJordanHome} alt="Jordan Home" />
        </div>
      </div>
    </>
  );
};

export default Home;
