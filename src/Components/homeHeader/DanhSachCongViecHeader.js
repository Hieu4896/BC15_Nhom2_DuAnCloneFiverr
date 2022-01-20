import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getApiDanhSachCongViecTheoTen } from "../../Redux/Actions/HomeActions/HomeAction";
import StyleSearchbar from "./otherPageSearchbar.module.css";
import StyleHeader from "./otherPagesHeader.module.css";
import Style from "../../_Pages/DanhSachCongViec/DanhSachCongViecDesktop.module.css";
import { getApiTypeJob } from "../../Redux/Actions/DanhSachCongViecActions/DanhSachCongViecActions";
import _ from "lodash";
import "./searchForm.scss";

export default function DanhSachCongViecHeader(props) {
  let [filteredData, setFilteredData] = useState([]);
  let [wordEntered, setWordEntered] = useState("");
  let { congViecTheoTen } = useSelector(
    (rootReducer) => rootReducer.HomeReducer
  );
  let { typeJob } = useSelector(
    (rootReducer) => rootReducer.DanhSachCongViecReducer
  );

  let dispatch = useDispatch();
  useEffect(() => {
    const action = getApiDanhSachCongViecTheoTen();
    dispatch(action);
  }, []);
  useEffect(() => {
    const actionTypeJob = getApiTypeJob();
    dispatch(actionTypeJob);
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
    console.log(searchWord);
  };

  const renderCongViec = () => {
    if (filteredData.length != 0) {
      return filteredData.slice(0, 10).map((prop, index) => {
        return (
          <a
            className="aStyleSearchbar"
            href={`/danhsachcongviec/${prop.name}`}
          >
            <li className={StyleSearchbar["liStyleSearchbar"]} key={index}>
              {prop.name}
            </li>
          </a>
        );
      });
    } else {
      return "";
    }
  };

  const renderTypejob = () => {
    return _.uniqBy(typeJob, "name").map((typeJob, index) => {
      if (typeJob.subTypeJobs.length > 0) {
        return (
          <li key={index} className={Style["typeJob"]}>
            <NavLink to={`/loaicongviec/${typeJob._id}`}>
              {typeJob.name}
            </NavLink>

            <li
              className={
                typeJob.name === "Data" ||
                typeJob.name === "Business" ||
                typeJob.name === "Programming & Tech" ||
                typeJob.name === "Lifestyle"
                  ? Style["subTypeJobIf"]
                  : Style["subTypeJob"]
              }
            >
              {typeJob.subTypeJobs.map((subTypeJobs, index) => {
                return (
                  <li
                    key={index}
                    style={{ display: "inline-block", padding: "20px" }}
                  >
                    {subTypeJobs.name}
                  </li>
                );
              })}
            </li>
          </li>
        );
      }
    });
  };

  return (
    <div>
      <nav className={StyleHeader["navHeader"]}>
        <div className="row align-items-baseline justify-content-between">
          <label className="labelHeader col-2">
            <NavLink to="/">
              <span className={StyleHeader["fiverChange"]}>fiverr</span>
              <span className="docChange">.</span>
            </NavLink>
          </label>
          <div className="col-6 p-0 m-0">
            <form className="formSearch">
              <input
                type="search"
                autofocus
                required
                placeholder="Find Services"
                onChange={handleChangeInput}
                value={wordEntered}
                size={20}
              />
              {/* {wordEntered !== "" ? (
                <i onClick={clearInput} className="fas fa-window-close"></i>
              ) : (
                ""
              )} */}
              <button
                type="submit"
                onClick={() => {
                  props.history.push("/danhsachcongviec/" + wordEntered);
                }}
              >
                Go
              </button>
            </form>
            <ul
              style={{ listStyle: "none" }}
              className={
                filteredData != 0
                  ? StyleSearchbar["search-bar-panel-active"]
                  : StyleSearchbar["search-bar-panel"]
              }
            >
              {renderCongViec()}
            </ul>
          </div>
          <ul className="ulHeader col-4 d-flex justify-content-between">
            <li className="liHeader">
              <NavLink className={StyleHeader["aChange"]} to="/">
                Become a Seller
              </NavLink>
            </li>
            <li className="liHeader">
              <NavLink className={StyleHeader["aChange"]} to="/">
                Sign in
              </NavLink>
            </li>
            <li className="liHeader">
              <NavLink className={StyleHeader["joinStyle"]} to="/">
                Join
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <div style={{ padding: "5px 50px" }}>
        <div style={{ padding: 0, width: "100%" }}>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              width: "100%",
            }}
          >
            <NavLink
              to="/"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                color: "#62646a",
              }}
            >
              {renderTypejob()}
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
