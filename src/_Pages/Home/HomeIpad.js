import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Style from "./homeIpad.module.css";
import { NavLink } from "react-router-dom";
import { getApiDanhSachCongViecTheoTen } from "../../Redux/Actions/HomeActions/HomeAction";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "./HomeCategoryIphonePlus.scss";
import { Navigation, Autoplay } from "swiper";

export default function HomeIpad(props) {
  let carousel1 =
    "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049961/bg-hero-1-900-x1.png";
  let carousel2 =
    "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203043/bg-hero-2-900-x1.png";
  let carousel3 =
    "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783973/bg-hero-3-900-x1.png";
  let carousel4 =
    "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049964/bg-hero-4-900-x1.png";
  let carousel5 =
    "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049961/bg-hero-5-900-x1.png";
  const arrHeroCarousel = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
  ];
  let carousel6 = "./image/homeImg/animated-explainer-2x.jpg";
  let carousel7 = "./image/homeImg/illustration-2x.jpg";
  let carousel8 = "./image/homeImg/logo-design-2x.jpg";
  let carousel9 = "./image/homeImg/seo-2x.jpg";
  let carousel10 = "./image/homeImg/voiceover-2x.jpg";
  let carousel11 = "./image/homeImg/translation-2x.jpg";
  let carousel12 = "./image/homeImg/book-covers-2x.jpg";
  let carousel13 = "./image/homeImg/AC.jpg";
  let carousel14 = "./image/homeImg/wordpress-2x.jpg";
  let carousel15 = "./image/homeImg/data-entry-2x.jpg";
  let [filteredData, setFilteredData] = useState([]);
  let [wordEntered, setWordEntered] = useState("");

  let { congViecTheoTen } = useSelector(
    (rootReducer) => rootReducer.HomeReducer
  );
  let arrSub = [
    {
      img: carousel6,
      brief: "Engage your audience",
      type: "Video Explainer",
      keyWord: "video",
    },
    {
      img: carousel7,
      brief: "Color your dreams",
      type: "Illustration",
      keyWord: "illustration",
    },
    {
      img: carousel8,
      brief: "Build your brand",
      type: "Logo Design",
      keyWord: "design",
    },
    {
      img: carousel9,
      brief: "Unlock growth online",
      type: "SEO",
      keyWord: "seo",
    },
    {
      img: carousel10,
      brief: "Share your message",
      type: "Voice Over",
      keyWord: "voice",
    },
    {
      img: carousel11,
      brief: "Go global",
      type: "Translation",
      keyWord: "translation",
    },
    {
      img: carousel12,
      brief: "Showcase your story",
      type: "Book Covers",
      keyWord: "book",
    },
    {
      img: carousel13,
      brief: "Reach more customers",
      type: "Social Media",
      keyWord: "social",
    },
    {
      img: carousel14,
      brief: "Customize your site",
      type: "WordPress",
      keyWord: "wordpress",
    },
    {
      img: carousel15,
      brief: "learn yout business",
      type: "Data Entry",
      keyWord: "data",
    },
  ];
  let dispatch = useDispatch();
  useEffect(() => {
    const action = getApiDanhSachCongViecTheoTen();
    dispatch(action);
  }, []);
  const handleChangeInput = (event) => {
    event.preventDefault();
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = congViecTheoTen.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  const renderCongViec = () => {
    if (filteredData.length != 0) {
      return filteredData.slice(0, 15).map((prop, index) => {
        return (
          <div>
            <NavLink
              className={Style["aStyleSearchbar"]}
              to={`/danhsachcongviec/${prop.name}`}
            >
              <li className={Style["liStyleSearchbar"]} key={index}>
                {prop.name}
              </li>
            </NavLink>
          </div>
        );
      });
    } else {
      return "";
    }
  };

  return (
    <Fragment>
      <div className={Style["hero-background"]}>
        {/* <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: 0,
          }}
        >
          {arrHeroCarousel.map((i, index) => {
            return (
              <SwiperSlide
                key={index}
                style={{ width: "100%", height: "100%" }}
              >
                <img
                  src={i}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper> */}
        <div className={Style["lower-background"]}></div>
        <div className={Style["header"]}>
          <h1>
            <span>
              Find the perfect{" "}
              <span className="freelanceItalic">freelance</span> services for
              your business
            </span>
          </h1>
          <div className={Style["search-bar"]}>
            <form className={Style["formInput"]}>
              <input
                type="text"
                className={Style["searchInput"]}
                placeholder="Find Services"
                onChange={handleChangeInput}
                value={wordEntered}
              />
              {wordEntered !== "" ? (
                <button
                  className="buttonBackspace"
                  type="button"
                  style={{
                    border: "none",
                    outline: "none",
                    background: "none",
                  }}
                  onClick={clearInput}
                >
                  <i className="fas fa-backspace"></i>
                </button>
              ) : (
                ""
              )}

              <button
                onClick={() => {
                  props.history.push("/danhsachcongviec/" + wordEntered);
                }}
                className={`${Style.buttonInput} btn btn-success`}
                type="submit"
              >
                Search
              </button>
            </form>
            <ul
              className={
                filteredData != 0
                  ? Style["search-bar-panel-active"]
                  : Style["search-bar-panel"]
              }
            >
              {renderCongViec()}
            </ul>
            <div className={Style["popular"]}>
              <p> Popular:</p>

              <ul>
                <li>
                  <a>Website Design</a>
                </li>
                <li>
                  <a>WordPress</a>
                </li>
                <li>
                  <a>Logo Design</a>
                </li>
                <li>
                  <a>NFT Art</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={Style["trusted-hero"]}>
        <p>Trusted by :</p>
        <ul>
          <li>
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png"
              alt="facebook"
            />
          </li>
          <li>
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png"
              alt="Google"
            />
          </li>
          <li>
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png"
              alt="NETFLIX"
            />
          </li>
          <li>
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png"
              alt="P&amp;G"
            />
          </li>
          <li>
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png"
              alt="PayPal"
            />
          </li>
        </ul>
      </div>
      <div className={Style["subcategory"]}>
        <h2 className={Style["title-Subcategory"]}>
          Popular professional services
        </h2>

        <Swiper
          style={{ height: "100%", width: "100%", padding: "20px 0" }}
          modules={[Navigation]}
          navigation={true}
          slidesPerView={3}
          spaceBetween={20}
        >
          {arrSub.map((prop, index) => {
            return (
              <SwiperSlide key={index} className="category_iphoneplus">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <p
                    style={{
                      color: "white",
                      fontSize: 13,
                    }}
                  >
                    {prop.brief}
                  </p>
                  <h4
                    style={{
                      color: "white",
                      fontSize: 15,
                      fontWeight: "bolder",
                    }}
                  >
                    {prop.type}
                  </h4>
                </div>
                <a href={`/danhsachcongviec/${prop.keyWord}`}>
                  <img className="subImg" src={prop.img} alt="" />
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={Style["sellingProposition"]}>
        <h2 className={Style["sellingPropositionTitle"]}>
          A whole world of freelance talent at your fingertips
        </h2>
        <div>
          <ul className="row">
            <li>
              <h6 className=" d-flex align-items-center">
                <span className="mr-2">
                  <i
                    style={{ color: "lightgreen" }}
                    class="fas fa-check-circle"
                  ></i>
                </span>
                <span className={Style["span-Content"]}>
                  The best for every budget
                </span>
              </h6>
              <p className={Style["p-Content"]}>
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </p>
            </li>
            <li>
              <h6 className="d-flex align-items-center">
                <span className="mr-2">
                  <i
                    style={{ color: "lightgreen" }}
                    class="fas fa-check-circle"
                  ></i>
                </span>
                <span className={Style["span-Content"]}>
                  Quality work done quickly
                </span>
              </h6>
              <p className={Style["p-Content"]}>
                Find the right freelancer to begin working on your project
                within minutes.
              </p>
            </li>
            <li>
              <h6 className="d-flex align-items-center">
                <span className="mr-2">
                  <i
                    style={{ color: "lightgreen" }}
                    class="fas fa-check-circle"
                  ></i>
                </span>
                <span className={Style["span-Content"]}>
                  Protected payments, every time
                </span>
              </h6>
              <p className={Style["p-Content"]}>
                Always know what you'll pay upfront. Your payment isn't released
                until you approve the work.
              </p>
            </li>
            <li>
              <h6 className="d-flex align-items-center">
                <span className="mr-2">
                  <i
                    style={{ color: "lightgreen" }}
                    class="fas fa-check-circle"
                  ></i>
                </span>
                <span className={Style["span-Content"]}>24/7 support</span>
              </h6>
              <p className={Style["p-Content"]}>
                Questions? Our round-the-clock support team is available to help
                anytime, anywhere.
              </p>
            </li>
          </ul>
          <div style={{ height: 300 }}>
            <video
              className={Style["videoIntro"]}
              controls
              poster="./image/homeImg/selling-proposition-still-1400-x1.png"
            >
              <source
                src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div className={Style["mainCategories"]}>
        <h2 className={Style["mainCategories-Title"]}>
          Explore the marketplace
        </h2>
        <div>
          <ul>
            <li>
              <a href="">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                  alt="Graphics &amp; Design"
                  loading="lazy"
                />
                <p>Graphics & Design</p>
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                  alt="Digital Marketing"
                  loading="lazy"
                />
                <p>Digital Marketing</p>
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                  alt="Writing &amp; Translation"
                  loading="lazy"
                />
                <p>Writing &amp; Translation</p>
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                  alt="Video &amp; Animation"
                  loading="lazy"
                />
                <p>Video &amp; Animation</p>
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                  alt="Music &amp; Audio"
                  loading="lazy"
                />
                <p>Music &amp; Audio</p>
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                  alt="Programming &amp; Tech"
                  loading="lazy"
                />
                <p>Programming &amp; Tech</p>
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                  alt="Business"
                  loading="lazy"
                />
                <p>Business</p>
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                  alt="Lifestyle"
                  loading="lazy"
                />
                <p>Lifestyle</p>
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                  alt="Data"
                  loading="lazy"
                />
                <p>Data</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
