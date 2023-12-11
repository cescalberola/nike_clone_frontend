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
import Basket from "../../assets/imgs home/Shop by Sport/01Basket.png";
import Running from "../../assets/imgs home/Shop by Sport/02Running.png";
import Training from "../../assets/imgs home/Shop by Sport/03Training.png";
import Soccer from "../../assets/imgs home/Shop by Sport/04Soccer.png";
import Golf from "../../assets/imgs home/Shop by Sport/05Golf.png";
import Tennis from "../../assets/imgs home/Shop by Sport/06Tennis.png";
import AmFootball from "../../assets/imgs home/Shop by Sport/07AmFootball.png";
import Baseball from "../../assets/imgs home/Shop by Sport/08Baseball.png";
import Yoga from "../../assets/imgs home/Shop by Sport/09Yoga.png"
import AirJordan11GratitudeHG from "../../assets/imgs home/Hottest Gifts/01AirJordan11Gratitude.png";
import AirJordan11RetroBigKid from "../../assets/imgs home/Hottest Gifts/02AirJordan11RetroBigKid.png";
import AirJordan11RetroLittleKid from "../../assets/imgs home/Hottest Gifts/03AirJordan11RetroLittleKid.png";
import AirJordan11RetroBabyKid from "../../assets/imgs home/Hottest Gifts/04AirJordan11RetroBabyKid.png";
import Jordan11Crib from "../../assets/imgs home/Hottest Gifts/05Jordan11Crib.png";
import DunkLowWomen from "../../assets/imgs home/Hottest Gifts/06DunkLowWomen.png";
import DunkLowRetro from "../../assets/imgs home/Hottest Gifts/07DunkLowRetro.png";
import DunkLowBigKid from "../../assets/imgs home/Hottest Gifts/08DunkLowBigKid.png";
import DunkLowLittleKid from "../../assets/imgs home/Hottest Gifts/09DunkLowLittleKid.png";
import DunkLowBaby from "../../assets/imgs home/Hottest Gifts/10DunkLowBaby.png";
import TheBestOfNike from "../../assets/imgs home/Nike Membership/01TheBestOfNike.png";
import MemberProduct from "../../assets/imgs home/Nike Membership/02MemberProduct.png";
import MemberRewards from "../../assets/imgs home/Nike Membership/03MemberRewards.png";
import SportsWellnessApps from "../../assets/imgs home/Nike Membership/04SportsWellnessApps.png";
import NikeByYou from "../../assets/imgs home/Nike Membership/05NikeByYou.png";
import Snkrs from "../../assets/imgs home/Nike Membership/06SNKRS.png";


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
  const showBySportSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3.6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
  };
  const hottestGiftsSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3.6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
  };
  const membershipSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
          <button className="ncss-btn-primary-dark">Notify Me</button>
          <button className="ncss-btn-primary-dark">Shop AJ11 Collection</button>
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
      <div className="container-shop-by-sport">
        <p>Shop by Sport</p>
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
        <div className="shop-by-sport-slider-container">
          <Slider
            ref={sliderRef}
            className="shop-by-sport-home"
            {...showBySportSettings}
          >
            <div>
              <img src={Basket} alt="Basket" />
            </div>
            <div>
              <img src={Running} alt="Running" />
            </div>
            <div>
              <img src={Training} alt="Training" />
            </div>
            <div>
              <img src={Soccer} alt="Soccer" />
            </div>
            <div>
              <img src={Golf} alt="Golf" />
            </div>
            <div>
              <img src={Tennis} alt="Tennis" />
            </div>
            <div>
              <img src={AmFootball} alt="Am Football" />
            </div>
            <div>
              <img src={Baseball} alt="Baseball" />
            </div>
            <div>
              <img src={Yoga} alt="Yoga" />
            </div>
          </Slider>
        </div>
      </div>
      <div className="container-hottest-gifts">
        <p>Hottest Gifts</p>
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
        <div className="hottest-gifts-slider-container">
          <Slider
            ref={sliderRef}
            className="hottest-gifts-home"
            {...hottestGiftsSettings}
          >
            <div>
              <img src={AirJordan11GratitudeHG} alt="Air Jordan 11 Gratitude HG" />
            </div>
            <div>
              <img src={AirJordan11RetroBigKid} alt="Air Jordan 11 Retro Big Kid" />
            </div>
            <div>
              <img src={AirJordan11RetroLittleKid} alt="Air Jordan 11 Retro Little Kid" />
            </div>
            <div>
              <img src={AirJordan11RetroBabyKid} alt="Air Jordan 11 Retro Baby Kid" />
            </div>
            <div>
              <img src={Jordan11Crib} alt="Jordan 11 Crib" />
            </div>
            <div>
              <img src={DunkLowWomen} alt="Dunk Low Women" />
            </div>
            <div>
              <img src={DunkLowRetro} alt="Dunk Low Retro" />
            </div>
            <div>
              <img src={DunkLowBigKid} alt="Dunk Low Big Kid" />
            </div>
            <div>
              <img src={DunkLowLittleKid} alt="Dunk Low Little Kid" />
            </div>
            <div>
              <img src={DunkLowBaby} alt="Dunk Low Baby" />
            </div>
          </Slider>
        </div>
      </div>
      <div className="container-membership">
        <p>Nike Membership</p>
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
        <div className="membership-slider-container">
          <Slider
            ref={sliderRef}
            className="membership-home"
            {...membershipSettings}
          >
            <div>
              <img src={TheBestOfNike} alt="The Best Of Nike" />
            </div>
            <div>
              <img src={MemberProduct} alt="Member Product" />
            </div>
            <div>
              <img src={MemberRewards} alt="Member Rewards" />
            </div>
            <div>
              <img src={SportsWellnessApps} alt="Sports Wellness Apps" />
            </div>
            <div>
              <img src={NikeByYou} alt="Nike By You" />
            </div>
            <div>
              <img src={Snkrs} alt="SNKRS" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Home;
