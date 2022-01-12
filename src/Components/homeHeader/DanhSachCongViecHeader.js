import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import { getApiDanhSachCongViecTheoTen } from "../../Redux/Actions/HomeActions/HomeAction";
import StyleSearchbar from "./otherPageSearchbar.module.css";
import StyleHeader from "./otherPagesHeader.module.css";
import Style from "../../_Pages/DanhSachCongViec/DanhSachCongViecDesktop.module.css";
import {
  getApiDanhSachCongViec,
  getApiDanhSachCongViecTheoTen2,
  getApiTypeJob,
} from "../../Redux/Actions/DanhSachCongViecActions/DanhSachCongViecActions";
import _ from "lodash";
export default function DanhSachCongViecHeader(props) {
  let [filteredData, setFilteredData] = useState([]);
  let [wordEntered, setWordEntered] = useState("");
  let [wordSearch, setwordSearch] = useState(props.match.params.typejob);
  let { congViecTheoTen } = useSelector(
    (rootReducer) => rootReducer.HomeReducer
  );
  let { typeJob } = useSelector(
    (rootReducer) => rootReducer.DanhSachCongViecReducer
  );
  let dispatch = useDispatch();
  useEffect(() => {
    const action = getApiDanhSachCongViecTheoTen2();
    const actionTypeJob = getApiTypeJob();
    dispatch(actionTypeJob);
    dispatch(action);
  }, []);
  const handleChangeInput = (event) => {
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
    setwordSearch("Find Services");
  };
  const renderCongViec = () => {
    if (filteredData.length != 0) {
      return filteredData.slice(0, 10).map((prop, index) => {
        return (
          <NavLink
            className="aStyleSearchbar"
            to={`/danhsachcongviec/${prop.name}`}
          >
            <li className={StyleSearchbar["liStyleSearchbar"]} key={index}>
              {prop.name}
            </li>
          </NavLink>
        );
      });
    } else {
      return "";
    }
  };

  const renderTypejob = () => {
    return _.uniqBy(typeJob, "name").map((typeJob, index) => {
      return (
        <li className={Style["typeJob"]}>
          <NavLink to={`/loaicongviec/${typeJob._id}`} key={index}>
            {typeJob.name}
          </NavLink>
          <div
            className={
              typeJob.name === "Lifestyle" ||
              typeJob.name === "Business" ||
              typeJob.name === "Data" ||
              typeJob.name === "Programming & Tech"
                ? Style["subTypeJobIf"]
                : Style["subTypeJob"]
            }
          >
            {typeJob.subTypeJobs.map((subTypeJobs, index) => {
              return (
                <li
                  key={index}
                  style={{ display: "inline-block", padding: "10px 30px" }}
                >
                  {subTypeJobs.name}
                </li>
              );
            })}
          </div>
        </li>
      );
    });
  };

  return (
    <div>
      <nav className={StyleHeader["navHeader"]}>
        <label className="labelHeader">
          <NavLink to="/">
            <span className={StyleHeader["fiverChange"]}>fiverr</span>
            <span className="docChange">.</span>
          </NavLink>
        </label>
        <label className={StyleSearchbar["header"]}>
          <div className={StyleSearchbar["search-bar"]}>
            <form className={StyleSearchbar["formInput"]}>
              <input
                type="text"
                className="searchInput"
                placeholder="Find Services"
                onChange={handleChangeInput}
                value={wordEntered}
              />
              {wordEntered !== "" ? (
                <button
                  type="button"
                  style={{
                    border: "none",
                    outline: "none",
                    background: "none",
                  }}
                  onClick={clearInput}
                >
                  <i class="fas fa-backspace"></i>
                </button>
              ) : (
                ""
              )}
              <button
                type="submit"
                onClick={() => {
                  props.history.push("/danhsachcongviec/" + wordEntered);
                }}
                className={StyleSearchbar["buttonInput"]}
              >
                Search
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
        </label>
        <ul className="ulHeader">
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
