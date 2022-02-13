import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Style from "./homeIphonePlus.module.css";
import { NavLink } from "react-router-dom";
import { getApiDanhSachCongViecTheoTen } from "../../Redux/Actions/HomeActions/HomeAction";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import { Navigation, Autoplay } from "swiper";

export default function HomeIphonePlus(props) {
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
        <div className={Style["lower-background"]}></div>
        <div className={Style["header"]}>
          <div style={{ marginBottom: 20, padding: "0 50px" }}>
            <span>Find the perfect freelance services for your business</span>
          </div>
          <div className={Style["search-bar"]}>
            <form className={Style["formInput"]}>
              <input
                type="text"
                className={Style["searchInput"]}
                placeholder="Find Services"
                onChange={handleChangeInput}
                value={wordEntered}
                maxLength={20}
                required
              />
              {wordEntered !== "" ? (
                <button
                  className={Style["buttonBackspace"]}
                  type="button"
                  onClick={clearInput}
                >
                  <i className="fas fa-backspace"></i>
                </button>
              ) : (
                ""
              )}
            </form>
            <button
              onClick={() => {
                props.history.push("/danhsachcongviec/" + wordEntered);
              }}
              className={`${Style.buttonInput} btn btn-success`}
              type="button"
            >
              Search
            </button>
          </div>
          <div
            style={{
              width: "100%",
              padding: "0 50px",
              position: "absolute",
              zIndex: "3",
            }}
          >
            <ul
              className={
                filteredData != 0
                  ? Style["search-bar-panel-active"]
                  : Style["search-bar-panel"]
              }
            >
              {renderCongViec()}
            </ul>
          </div>
          <div className={Style["popular"]}>
            <p>Popular :</p>
            <ul>
              <li>
                <a className="text-body-2">Website Design</a>
              </li>
              <li>
                <a className="text-body-2">WordPress</a>
              </li>
              <li>
                <a className="text-body-2">Logo Design</a>
              </li>
              <li>
                <a className="text-body-2">NFT Art</a>
              </li>
            </ul>
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
          slidesPerView={1}
        >
          {arrSub.map((prop, index) => {
            return (
              <SwiperSlide key={index} className="rainbow">
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
                      fontSize: 16,
                    }}
                  >
                    {prop.brief}
                  </p>
                  <h4
                    style={{
                      color: "white",
                      fontSize: 20,
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
        <div className="row align-items-center">
          <div className="col-12  ">
            <h2 className={Style["sellingPropositionTitle"]}>
              A whole world of freelance talent at your fingertips
            </h2>
            <ul>
              <li>
                <h6 className="d-flex align-items-center">
                  <span className="mr-2">
                    <i
                      style={{ color: "lightgreen" }}
                      class="fas fa-check-circle"
                    ></i>
                  </span>
                  <span>The best for every budget</span>
                </h6>
                <p style={{ color: "#62646a", fontSize: 20 }}>
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
                  <span>Quality work done quickly</span>
                </h6>
                <p style={{ color: "#62646a", fontSize: 20 }}>
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
                  <span>Protected payments, every time</span>
                </h6>
                <p style={{ color: "#62646a", fontSize: 20 }}>
                  Always know what you'll pay upfront. Your payment isn't
                  released until you approve the work.
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
                  <span>24/7 support</span>
                </h6>
                <p style={{ color: "#62646a", fontSize: 20 }}>
                  Questions? Our round-the-clock support team is available to
                  help anytime, anywhere.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-12">
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
