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
} from "../../Redux/Actions/DanhSachCongViecActions/DanhSachCongViecActions";
import _, { debounce } from "lodash";
import { useState } from "react";

export default function DanhSachCongViecDesktop(props) {
  let keyWord = props.match.params.typejob;
  console.log(keyWord);

  let { danhSachCongViec } = useSelector(
    (rootReducer) => rootReducer.DanhSachCongViecReducer
  );
  let Pages = [];

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
      return value.name.toLowerCase().includes(keyWord.toLowerCase());
    }
  });
  let currentItem = newFilter.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentItem);
  let dispatch = useDispatch();
  useEffect(() => {
    const actionDanhSachCongViec = getApiDanhSachCongViec();
    dispatch(actionDanhSachCongViec);
    window.addEventListener("scroll", toggleBackToTop);
    return () => {
      window.removeEventListener("scroll", toggleBackToTop);
    };
  }, []);

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
            <p style={{ padding: "0 10px" }}>
              User{" "}
              <span style={{ color: "black", fontWeight: "bolder" }}>
                {job.userCreated}
              </span>
            </p>
            <p style={{ color: "black", marginBottom: 10, padding: "0 10px" }}>
              {job.name}
            </p>
            <i
              class="fas fa-star"
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
                class="fas fa-heart"
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

  return (
    <div style={{ padding: "5px 50px", maxWidth: 1381.09 }}>
      <h1 style={{ fontSize: 30 }}>Results for "{keyWord}"</h1>
      <div
        style={{
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "space-between",
          padding: "0  15px",
        }}
      >
        {" "}
        <span style={{ color: "teal", fontSize: 20 }}>
          {newFilter.length} services available
        </span>
        {/* <div className={Style["sortButton"]}>
          <button
            onClick={() => {
              setproServices(true);
              setlocalSellers(null);
              setonlineSellers(null);
              setcurrentPage(1);
            }}
          >
            proServices
          </button>
          <button
            onClick={() => {
              setlocalSellers(true);
              setproServices(null);
              setonlineSellers(null);
              setcurrentPage(1);
            }}
          >
            localSellers
          </button>
          <button
            onClick={() => {
              setonlineSellers(true);
              setlocalSellers(null);
              setproServices(null);
              setcurrentPage(1);
            }}
          >
            onlineSellers
          </button>
          <button
            onClick={() => {
              setonlineSellers(false);
              setlocalSellers(false);
              setproServices(false);
              setcurrentPage(1);
            }}
          >
            Default
          </button>
        </div> */}
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
        <div className="row ml-0 mr-0">{renderDanhSachCongViec()}</div>

        <ul className={Style["PageNumber"]}>
          <button
            disabled={currentPage == Pages[0] ? true : false}
            onClick={handlePrevButton}
          >
            Prev
          </button>

          {renderPagesNumber()}

          <button
            disabled={currentPage == Pages[Pages.length - 1] ? true : false}
            onClick={handleNextButton}
          >
            Next
          </button>
        </ul>
      </div>
    </div>
  );
}
