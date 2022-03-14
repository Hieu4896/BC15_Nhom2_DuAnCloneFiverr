import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Pagination } from "antd";
import Style from "./DanhSachCongViecDesktop.module.css";
import {
  getApiDanhSachCongViec,
  getApiTypeJob,
  setStateKeyWord,
} from "../../Redux/Actions/DanhSachCongViecActions/DanhSachCongViecActions";
import _, { debounce } from "lodash";
import { useState } from "react";
import HomeFooter from "../../Components/homeFooter/HomeFooter";
import UserCreated from "../../Components/otherPagesHeader/otherPagesHeaderDesktop/UserCreated";

export default function DanhSachCongViecDesktop(props) {
  let keyWord = props.match.params.typejob;
  // const [keyWord, setkeyWord] = useState(props.match.params.typejob);
  console.log(keyWord);
  let { danhSachCongViec, stateKeyWord } = useSelector(
    (rootReducer) => rootReducer.DanhSachCongViecReducer
  );
  console.log(danhSachCongViec);
  let Pages = [];
  let [notFounding, setNotFounding] = useState(false);
  let [currentPage, setcurrentPage] = useState(1);
  let [itemPerPage, setitemPerPage] = useState(12);
  let [pageNumberLimit, setpageNumberLimit] = useState(5);
  let [maxpageNumberLimit, setmaxpageNumberLimit] = useState(5);
  let [minpageNumberLimit, setminpageNumberLimit] = useState(0);
  let indexOfLastItem = currentPage * itemPerPage; //4
  let indexOfFirstItem = indexOfLastItem - itemPerPage; //0

  let [proServices, setproServices] = useState(false);
  let [localSellers, setlocalSellers] = useState(false);
  let [onlineSellers, setonlineSellers] = useState(false);
  let [data, setdata] = useState("default");
  let [backToTop, setbackToTop] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleDataChange = (newData) => {
    if (newData === "proServices") {
      setproServices(true);
      setlocalSellers(null);
      setonlineSellers(null);
      setcurrentPage(1);
      setmaxpageNumberLimit(5);
      setminpageNumberLimit(0);
    } else if (newData === "localSellers") {
      setlocalSellers(true);
      setproServices(null);
      setonlineSellers(null);
      setcurrentPage(1);
      setmaxpageNumberLimit(5);
      setminpageNumberLimit(0);
    } else if (newData === "onlineSellers") {
      setonlineSellers(true);
      setproServices(null);
      setlocalSellers(null);
      setcurrentPage(1);
      setmaxpageNumberLimit(5);
      setminpageNumberLimit(0);
    } else {
      setonlineSellers(false);
      setproServices(false);
      setlocalSellers(false);
      setcurrentPage(1);
      setmaxpageNumberLimit(5);
      setminpageNumberLimit(0);
    }
    setdata(newData);
  };

  const newFilter = danhSachCongViec.filter((value) => {
    if (
      value.onlineSellers === onlineSellers ||
      value.localSellers === localSellers ||
      value.proServices === proServices
    ) {
      return value.name.toLowerCase().includes(stateKeyWord.toLowerCase());
    }
  });
  let currentItem = newFilter.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentItem);

  const handleClick = (event) => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    setcurrentPage(Number(event.target.id));
  };
  const renderDanhSachCongViec = () => {
    return currentItem.map((job, index) => {
      return (
        <div className="col-3 mb-3 " key={index}>
          <a style={{ color: "black" }} href={`/chitietcongviec/${job._id}`}>
            {" "}
            <img src={job.image} alt="" style={{ width: "100%" }} />
            <div
              className="text-left"
              style={{
                backgroundColor: "white",
                height: "200px",
                border: "1px solid #9e9e9e57",
                position: "relative",
              }}
            >
              <UserCreated userCreated={job.userCreated} />
              <p
                style={{ color: "black", marginBottom: 10, padding: "0 10px" }}
              >
                {job.name}
              </p>
              <i
                className="fas fa-star"
                style={{ color: "orange", marginRight: 5, padding: "0 10px" }}
              ></i>
              <span style={{ color: "orange" }}>{job.rating}</span>
              <div
                style={{
                  border: "1px solid #9e9e9e57",
                  position: "absolute",
                  width: "100%",
                  bottom: 0,

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <i
                  style={{
                    lineHeight: "29px",
                    padding: "0 10px",
                    color: "#00000047",
                  }}
                  className="fas fa-heart"
                ></i>
                <span
                  style={{
                    lineHeight: "29px",
                    fontSize: 10,
                    padding: "0 10px",
                  }}
                >
                  STARTING AT{" "}
                  <span style={{ fontSize: 17, fontWeight: "bolder" }}>
                    ${job.price}
                  </span>
                </span>
              </div>
            </div>
          </a>
        </div>
      );
    });
  };
  console.log(newFilter.length);
  for (let i = 1; i <= Math.ceil(newFilter.length / itemPerPage); i++) {
    Pages.push(i);
  }
  console.log(Pages);
  const renderPagesNumber = () => {
    return Pages.map((number, index) => {
      if (number < maxpageNumberLimit + 1 && number > minpageNumberLimit) {
        return (
          <li
            className={currentPage === number ? Style["active"] : null}
            onClick={handleClick}
            key={index}
            id={number}
          >
            {number}
          </li>
        );
      } else {
        return null;
      }
    });
  };
  const handleNextButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    setcurrentPage(currentPage + 1);
    if (currentPage + 1 > maxpageNumberLimit) {
      setmaxpageNumberLimit(maxpageNumberLimit + pageNumberLimit);
      setminpageNumberLimit(minpageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    setcurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxpageNumberLimit(maxpageNumberLimit - pageNumberLimit);
      setminpageNumberLimit(minpageNumberLimit - pageNumberLimit);
    }
  };
  const toggleBackToTop = () => {
    if (window.pageYOffset > 300) {
      setbackToTop(true);
    } else {
      setbackToTop(false);
    }
  };
  let dispatch = useDispatch();
  useEffect(() => {
    let timeOut1 = setTimeout(() => {
      const setNewKeyWord = setStateKeyWord(keyWord);
      dispatch(setNewKeyWord);
      const actionDanhSachCongViec = getApiDanhSachCongViec();
      dispatch(actionDanhSachCongViec);
      setLoading(true);
      window.addEventListener("scroll", toggleBackToTop);
    }, 1000);
    return () => {
      clearTimeout(timeOut1);

      window.removeEventListener("scroll", toggleBackToTop);
    };
  }, [keyWord]);
  useEffect(() => {
    let timeOut2 = setTimeout(() => {
      setNotFounding(true);
    }, 2000);
    return () => {
      clearTimeout(timeOut2);
    };
  }, [keyWord]);
  return (
    <div>
      {loading && keyWord == stateKeyWord && newFilter.length >= 1 ? (
        <div>
          <div style={{ position: "relative" }}>
            <div style={{ padding: "5px 50px" }}>
              <h1 style={{ fontSize: 30 }}>Results for "{stateKeyWord}"</h1>
              <div>
                {" "}
                <span style={{ color: "teal", fontSize: 20 }}>
                  {newFilter.length} services available
                </span>
                <form style={{ width: "20%" }}>
                  <h4>Sort by :</h4>
                  <select
                    name="cars"
                    className="custom-select"
                    value={data}
                    onChange={(e) => {
                      handleDataChange(e.target.value);
                    }}
                  >
                    <option id="default" value="default">
                      default
                    </option>
                    <option id="proServices" value="proServices">
                      proServices
                    </option>
                    <option id="localSellers" value="localSellers">
                      localSellers
                    </option>
                    <option id="onlineSellers" value="onlineSellers">
                      onlineSellers
                    </option>
                  </select>
                </form>
              </div>

              <div
                style={{
                  padding: "20px 0",
                }}
              >
                <div className="row">{renderDanhSachCongViec()}</div>

                <ul className={Style["PageNumber"]}>
                  <button
                    disabled={currentPage == Pages[0] ? true : false}
                    onClick={handlePrevButton}
                  >
                    Prev
                  </button>

                  {renderPagesNumber()}

                  <button
                    disabled={
                      currentPage == Pages[Pages.length - 1] ? true : false
                    }
                    onClick={handleNextButton}
                  >
                    Next
                  </button>
                </ul>
              </div>
            </div>
          </div>
          <HomeFooter />
        </div>
      ) : (
        <div>
          <div
            style={{
              position: "absolute",
              right: "50%",
              animationIterationCount: 4,
            }}
            className="spinner-grow text-success"
            role="status"
          >
            <span className="sr-only text-success">Loading...</span>
          </div>
          {notFounding && keyWord == stateKeyWord ? (
            <div>
              {" "}
              <div
                style={{ textAlign: "center" }}
                className="d-flex justify-content-center flex-column align-items-center"
              >
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/apps/empty-search-results.229c0d3.png"
                  alt="empty result image"
                  style={{ width: "30%", objectFit: "cover" }}
                />
                <div>
                  <h2 style={{ fontSize: 30 }}>
                    No Services Found For Your Search
                  </h2>
                  <p style={{ fontSize: 16, color: "#62646a" }}>
                    Try a new search or get a free quote for your project <br />
                    from our community of freelancers.
                  </p>
                </div>
              </div>
              <HomeFooter />
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}
