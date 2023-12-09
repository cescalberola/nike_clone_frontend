import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.scss";
import AirJordan11Gratitude from "../../assets/imgs home/AirJordan11Gratitude/AirJordan11Gratitude.png";
import DunkTheHalls from "../../assets/imgs home/Trending/01DunkTheHalls.png";
import TheMostIconicGifts from "../../assets/imgs home/Trending/02TheMostIconicGifts.png";
import NewestInAJ1 from "../../assets/imgs home/Trending/03NewestInAJ1.png";
import CozyStyleThatAllYou from "../../assets/imgs home/Trending/04CozyStyleThatAllYou.png";
import WinterRunningEssentials from "../../assets/imgs home/Trending/05WinterRunningEssentials.png";
import HappeningNow from "../../assets/imgs home/Happening Now/Happening Now.png";
import Price30 from "../../assets/imgs home/Top Gifts by Price/30.png";
import Price50 from "../../assets/imgs home/Top Gifts by Price/50.png";
import Price100 from "../../assets/imgs home/Top Gifts by Price/100.png";
import AirMaxArrrivals from "../../assets/imgs home/Featured/AirMaxArrrivals.png";
import UnpackedAlexMorgan from "../../assets/imgs home/Featured/UnpackedAlexMorgan.png";
import AirJordan1 from "../../assets/imgs home/Always Iconic/01AirJordan1.png";
import AirForce1 from "../../assets/imgs home/Always Iconic/02AirForce1.png";
import Dunk from "../../assets/imgs home/Always Iconic/03Dunk.png";
import AirMax from "../../assets/imgs home/Always Iconic/04AirMax.png";
import LeBron from "../../assets/imgs home/Always Iconic/05LeBron.png";
import NikeBlazer from "../../assets/imgs home/Always Iconic/06NikeBlazer.png";
import Pegasus from "../../assets/imgs home/Always Iconic/07Pegasus.png";
import Metcon from "../../assets/imgs home/Always Iconic/08Metcon.png";

const Home = () => {
  const sliderRef = useRef(null);

  const bannerSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  const trendingSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
  };
  const alwaysIconicSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3.6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
  };
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };
  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <>
      <Slider className="banner-home" {...bannerSettings}>
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
          <img src={AirJordan11Gratitude} alt="Jordan Home" />
        </div>
        <h1 className="jordan-gratitude">AIR JORDAN 11 'GRATITUDE'</h1>
        <p>Shop the heritage colorway on 12.9.</p>
        <div className="buttons-jordan-gratitude">
          <button>Notify Me</button>
          <button>Shop AJ11 Collection</button>
        </div>
      </div>
      <div className="container-trending">
        <p>Trending</p>
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
        <div className="trending-slider-container">
          <Slider
            ref={sliderRef}
            className="trending-home"
            {...trendingSettings}
          >
            <div>
              <img src={DunkTheHalls} alt="Dunk The Halls" />
            </div>
            <div>
              <img src={TheMostIconicGifts} alt="Most Iconic Gifts" />
            </div>
            <div>
              <img src={NewestInAJ1} alt="Newest In AJ1" />
            </div>
            <div>
              <img src={CozyStyleThatAllYou} alt="Cozy Style" />
            </div>
            <div>
              <img src={WinterRunningEssentials} alt="Winter Running" />
            </div>
          </Slider>
        </div>
      </div>
      <div className="container-hapenning-now">
        <p>Happening Now</p>
        <div className="img-happening-now">
          <img src={HappeningNow} alt="Happening Now" />
        </div>
      </div>
      <div className="container-gifts-by-price">
        <p>Top Gifts by Price</p>
        <div className="img-gifts-by-price">
          <img src={Price30} alt="30" />
          <img src={Price50} alt="50" />
          <img src={Price100} alt="100" />
        </div>
      </div>
      <div className="container-featured">
        <p>Featured</p>
        <div className="img-featured">
          <img src={AirMaxArrrivals} alt="Air Max Arrrivals" />
          <img src={UnpackedAlexMorgan} alt="Unpacked Alex Morgan" />
        </div>
      </div>
      <div className="container-always-iconic">
        <p>Always Iconic</p>
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
        <div className="always-iconic-slider-container">
          <Slider
            ref={sliderRef}
            className="always-iconic-home"
            {...alwaysIconicSettings}
          >
            <div>
              <img src={AirJordan1} alt="Air Jordan" />
            </div>
            <div>
              <img src={AirForce1} alt="Air Force" />
            </div>
            <div>
              <img src={Dunk} alt="Dunk" />
            </div>
            <div>
              <img src={AirMax} alt="Air Max" />
            </div>
            <div>
              <img src={LeBron} alt="Le Bron" />
            </div>
            <div>
              <img src={NikeBlazer} alt="Nike Blazer" />
            </div>
            <div>
              <img src={Pegasus} alt="Pegasus" />
            </div>
            <div>
              <img src={Metcon} alt="Metcon" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Home;
