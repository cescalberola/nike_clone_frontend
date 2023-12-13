import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.scss";
import { Link } from "react-router-dom";
import "../../f00ae4c5bdca7b589b8a.css"

const Home = () => {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };
  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };
  const trendingSliderRef = useRef(null);

  const nextSlideTrending = () => {
    trendingSliderRef.current.slickNext();
  };

  const prevSlideTrending = () => {
    trendingSliderRef.current.slickPrev();
  };
  const alwaysIconicSliderRef = useRef(null);

  const nextSlideAlwaysIconic = () => {
    alwaysIconicSliderRef.current.slickNext();
  };

  const prevSlideAlwaysIconic = () => {
    alwaysIconicSliderRef.current.slickPrev();
  };
  const showBySportSliderRef = useRef(null);

  const nextSlideshowBySport = () => {
    showBySportSliderRef.current.slickNext();
  };

  const prevSlideshowBySport = () => {
    showBySportSliderRef.current.slickPrev();
  };
  const hottestGiftsSliderRef = useRef(null);

  const nextSlidehottestGifts = () => {
    hottestGiftsSliderRef.current.slickNext();
  };

  const prevSlideshottestGifts = () => {
    hottestGiftsSliderRef.current.slickPrev();
  };

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
    slidesToShow: 3,
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

  return (
    <>
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
      </Slider>
      <div className="home">
        <div className="home-img">
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_2266,c_limit/834c7192-3782-46b7-a648-6abb212f20bc/nike-just-do-it.jpg"
            alt=""
          />
        </div>
        <h3 className="si35-ISy _1MF91zHG text-color-primary-dark responsive-display-2-1 jordan-gratitude">THE MOST<br></br>ICONIC GIFTS</h3>
        <p>
          Some timeless classics, some future favorites—these kicks and more are
          100% on their list
        </p>
        <div className="buttons-jordan-gratitude">
          <Link to={"/products"}>
            <button className="ncss-btn-primary-dark">Shop</button>
          </Link>
        </div>
      </div>
      <div className="content-home-padding">
        <div className="container-trending">
          <p>Trending</p>
          <button className="trending" onClick={prevSlideTrending}>
            Previous
          </button>
          <button className="trending" onClick={nextSlideTrending}>
            Next
          </button>
          <div className="trending-slider-container">
            <Slider
              ref={trendingSliderRef}
              className="trending-home"
              {...trendingSettings}
            >
              <div>
                <img
                  src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_653,c_limit/08a905be-557b-47ff-8f6e-6056d7a122ed/nike-just-do-it.jpg"
                  alt="Dunk The Halls"
                />
                <h3>Dunk the Halls</h3>
              </div>
              <div>
                <img
                  src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_653,c_limit/ea2229d0-984b-4787-a4d4-783b92782721/nike-just-do-it.jpg"
                  alt="Cozy Style"
                />
                <h3>Cozy Style That’s All You</h3>
              </div>
              <div>
                <img
                  src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_653,c_limit/607f9e67-fbbb-444e-a388-5a10c8bea602/nike-just-do-it.jpg"
                  alt="Newest In AJ1"
                />
                <h3>Newest in AJ1</h3>
              </div>
              <div>
                <img
                  src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_653,c_limit/c7d4e186-efaa-4087-aea9-b80a2311aef7/nike-just-do-it.jpg"
                  alt="Winter Running"
                />
                <h3>Winter Running Essentials</h3>
              </div>
            </Slider>
          </div>
        </div>
        <div className="container-hapenning-now">
          <p>Happening Now</p>
          <div className="img-happening-now">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1824,c_limit/13477ed1-8759-4ece-9be9-87b986657dba/nike-just-do-it.jpg"
              alt="Happening Now"
            />
          </div>
        </div>
        <div className="container-gifts-by-price">
          <p>Top Gifts by Price</p>
          <div className="img-gifts-by-price">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_653,c_limit/100c53bd-cb6a-4867-85a6-f17f1276910a/nike-just-do-it.jpg"
              alt="30"
            />
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_653,c_limit/caf16b9f-1afd-4883-8321-617c5e059051/nike-just-do-it.jpg"
              alt="50"
            />
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_653,c_limit/ae6531c8-76cd-4329-8670-2f2bc6930049/nike-just-do-it.jpg"
              alt="100"
            />
          </div>
        </div>
        <div className="container-featured">
          <p>Featured</p>
          <div className="img-featured">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_906,c_limit/db992ab5-957b-4e63-b088-c2a8972e2c3a/nike-just-do-it.jpg"
              alt="Air Max Arrrivals"
            />
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_906,c_limit/e4eae1d1-659a-4f4f-9c19-5fd96926d3af/nike-just-do-it.png"
              alt="Unpacked Alex Morgan"
            />
          </div>
        </div>
        <div className="container-always-iconic">
          <p>Always Iconic</p>
          <button className="always-iconic" onClick={prevSlideAlwaysIconic}>
            Previous
          </button>
          <button className="always-iconic" onClick={nextSlideAlwaysIconic}>
            Next
          </button>
          <div className="always-iconic-slider-container">
            <Slider
              ref={alwaysIconicSliderRef}
              className="always-iconic-home"
              {...alwaysIconicSettings}
            >
              <a href="http://localhost:5173/products/65786f875608e74065b6fba4">
                <div>
                  <img
                    src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-mens-shoes-jBrhbr.png"
                    alt="Air Force"
                  />
                </div>
              </a>
              <a href="http://localhost:5173/products/65772b54533e382a7d059d80">
                <div>
                  <img
                    src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cee5c042-0313-469e-a461-76f820f28d97/dunk-low-shoes-rv2vSN.png"
                    alt="Dunk"
                  />
                </div>
              </a>
              <a href="http://localhost:5173/products/65786c805608e74065b6fb85">
                <div>
                  <img
                    src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/air-max-90-mens-shoes-6n3vKB.png"
                    alt="Air Max"
                  />
                </div>
              </a>
              <a href="http://localhost:5173/products/65786d635608e74065b6fb91">
                <div>
                  <img
                    src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5bf2bb46-561e-4429-b522-4689057c8ba5/lebron-witness-6-basketball-shoes-HXbMw7.png"
                    alt="Le Bron"
                  />
                </div>
              </a>
              <a href="http://localhost:5173/products/657871015608e74065b6fbab">
                <div>
                  <img
                    src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/389b709e-5102-4e55-aa5d-07099b500831/blazer-mid-77-vintage-mens-shoes-nw30B2.png"
                    alt="Nike Blazer"
                  />
                </div>
              </a>
              <a href="http://localhost:5173/products/657871e05608e74065b6fbb1">
                <div>
                  <img
                    src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d517ab75-204b-4f88-9c99-389f14d7b0d5/pegasus-40-mens-road-running-shoes-mVJdmS.png"
                    alt="Pegasus"
                  />
                </div>
              </a>
            </Slider>
          </div>
        </div>
        <div className="container-shop-by-sport">
          <p>Shop by Sport</p>
          <button className="shop-by-sport" onClick={prevSlideshowBySport}>
            Previous
          </button>
          <button className="shop-by-sport" onClick={nextSlideshowBySport}>
            Next
          </button>
          <div className="shop-by-sport-slider-container">
            <Slider
              ref={showBySportSliderRef}
              className="shop-by-sport-home"
              {...showBySportSettings}
            >
              <div>
                <img
                  src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_922,c_limit/d6c40c07-7815-447d-9286-d50ea0e083c2/nike-just-do-it.jpg"
                  alt="Basket"
                />
              </div>
              <div>
                <img
                  src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_922,c_limit/499bd184-ee9f-4ecf-b1ae-dfc1b644415d/nike-just-do-it.jpg"
                  alt="Running"
                />
              </div>
              <div>
                <img
                  src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_922,c_limit/403e9305-c72d-4af3-9b83-1a7c8240d057/nike-just-do-it.jpg"
                  alt="Training"
                />
              </div>
              <div>
                <img
                  src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_922,c_limit/37fb1919-fa31-4678-9195-a5e3b9d8a005/nike-just-do-it.jpg"
                  alt="Soccer"
                />
              </div>
              <div>
                <img
                  src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_922,c_limit/ba14910a-6036-4097-a7fa-cf771027e24f/nike-just-do-it.jpg"
                  alt="Golf"
                />
              </div>
              <div>
                <img
                  src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_922,c_limit/a9188b36-3519-4d5f-b5b3-1741367a78f7/nike-just-do-it.jpg"
                  alt="Tennis"
                />
              </div>
              <div>
                <img
                  src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_922,c_limit/bf00b2da-be0b-4903-8010-5069dd2314d0/nike-just-do-it.jpg"
                  alt="Am Football"
                />
              </div>
              <div>
                <img
                  src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_922,c_limit/196f8a68-c98e-4571-9d53-607cfae1ad8f/nike-just-do-it.jpg"
                  alt="Baseball"
                />
              </div>
              <div>
                <img
                  src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_922,c_limit/97c1837b-7f93-40a8-94cd-7d15cacad048/nike-just-do-it.jpg"
                  alt="Yoga"
                />
              </div>
            </Slider>
          </div>
        </div>
        <div className="container-hottest-gifts">
          <p>Hottest Gifts</p>
          <button className="hottest-gifts" onClick={prevSlideshottestGifts}>
            Previous
          </button>
          <button className="hottest-gifts" onClick={nextSlidehottestGifts}>
            Next
          </button>
          <div className="hottest-gifts-slider-container">
            <Slider
              ref={hottestGiftsSliderRef}
              className="hottest-gifts-home"
              {...hottestGiftsSettings}
            >
              <div>
                <img
                  src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_653,c_limit/422df1e9-a0b5-4e11-8cff-77990905f14a/air-jordan-11-retro-big-kids-shoes-KK99vE.png"
                  alt="Air Jordan 11 Gratitude HG"
                />
              </div>
              <div>
                <img
                  src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_653,c_limit/1adab659-4d8b-4eaa-89a1-8cf3de44cd77/jordan-11-crib-bootie-pmz67m.png"
                  alt="Jordan 11 Crib"
                />
              </div>
              <div>
                <img
                  src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_653,c_limit/d14fc386-1067-4a72-961e-9f8134680703/dunk-low-womens-shoes-4W2Z5P.png"
                  alt="Dunk Low Women"
                />
              </div>
              <div>
                <img
                  src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_653,c_limit/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-mens-shoes-87q0hf.png"
                  alt="Dunk Low Retro"
                />
              </div>
              <div>
                <img
                  src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_653,c_limit/56ff13a0-d2e6-49ed-bfd2-43dc2ba0922b/dunk-low-big-kids-shoes-Ss5wx2.png"
                  alt="Dunk Low Big Kid"
                />
              </div>
              <div>
                <img
                  src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_653,c_limit/d5a172a4-63de-4a03-b043-06649a0be10c/dunk-low-little-kids-shoes-tSk2Ms.png"
                  alt="Dunk Low Little Kid"
                />
              </div>
              <div>
                <img
                  src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_653,c_limit/60753fb7-f964-4c3e-810b-f23adab208e5/dunk-low-baby-toddler-shoes-xtt21x.png"
                  alt="Dunk Low Baby"
                />
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
                <img
                  src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_654,c_limit/058f025c-2161-4804-91c8-5176ea565294/nike-just-do-it.jpg"
                  alt="The Best Of Nike"
                />
              </div>
              <div>
                <img
                  src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_654,c_limit/4c87032a-1756-47dc-b731-966f2d79285e/nike-just-do-it.jpg"
                  alt="Member Product"
                />
              </div>
              <div>
                <img
                  src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_654,c_limit/c9176bd9-e727-46ad-8bcb-62312cbfd5d5/nike-just-do-it.jpg"
                  alt="Member Rewards"
                />
              </div>
              <div>
                <img
                  src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_654,c_limit/73de197a-2e67-42aa-b4e6-aeda1883636b/nike-just-do-it.jpg"
                  alt="Sports Wellness Apps"
                />
              </div>
              <div>
                <img
                  src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_654,c_limit/a3d73dc6-a36a-432c-a845-68bf59c5f876/nike-just-do-it.jpg"
                  alt="Nike By You"
                />
              </div>
              <div>
                <img
                  src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_654,c_limit/fb8234b8-0aa7-4d44-8f52-6f95578b1b8a/nike-just-do-it.jpg"
                  alt="SNKRS"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
