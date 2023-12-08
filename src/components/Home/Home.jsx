import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.scss";
import NikeJordanHome from "../../assets/imgs home/Nike Jordan home.png";
import DunkTheHalls from "../../assets/imgs home/Trending/Dunk the Halls.png";
import MostIconicGifts from "../../assets/imgs home/Trending/The Most Iconic Gifts.png";
import NewestInAJ1 from "../../assets/imgs home/Trending/NewestinAJ1.png";
import CozyStyle from "../../assets/imgs home/Trending/Cozy Style That's All You.png";
import WinterRunning from "../../assets/imgs home/Trending/Winter Running Essentials.png";

const Home = () => {
  const settings = {
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
        <div className="home-img">
          <img src={NikeJordanHome} alt="Jordan Home" />
        </div>
        <h1 className="jordan-gratitude">AIR JORDAN 11 'GRATITUDE'</h1>
        <p>Shop the heritage colorway on 12.9.</p>
        <div className="buttons-jordan-gratitude">
            <button>Notify Me</button>
            <button>Shop AJ11 Collection</button>
        </div>
      </div>
      <div className="container-trending">
      <h3>Trending</h3>
      {/* <Slider className="trending-home" {...settings}>
      <div>
          <img src={DunkTheHalls} alt="Dunk The Halls" />
        </div>
      <div>
          <img src={MostIconicGifts} alt="Most Iconic Gifts" />
        </div>
      <div>
          <img src={NewestInAJ1} alt="Newest In AJ1" />
        </div>
      <div>
          <img src={CozyStyle} alt="Cozy Style" />
        </div>
      <div>
          <img src={WinterRunning} alt="Winter Running" />
        </div>
       
      </Slider> */}
      </div>
    </>
  );
};

export default Home;
