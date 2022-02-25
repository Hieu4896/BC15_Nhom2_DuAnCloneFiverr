import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getApiDanhSachCongViecTheoTen } from "../../Redux/Actions/HomeActions/HomeAction";
import StyleSearchbar from "../otherPagesHeader//otherPagesIphone/otherPageSearchbarIphone.module.css";
import StyleHeader from "../otherPagesHeader/otherPagesIphone/otherPageHeaderIphone.module.css";
import Style from "../otherPagesHeader/otherPagesIphone/danhSachCongViecIphone.module.css";
import { getApiTypeJob } from "../../Redux/Actions/DanhSachCongViecActions/DanhSachCongViecActions";
import _ from "lodash";
import StyleSearchForm from "../otherPagesHeader/otherPagesIphone/searchFormIphone.module.scss";
export default function LoaiCongViecHeaderIphone(props) {
  let [filteredData, setFilteredData] = useState([]);
  let [category, setCategory] = useState(false);
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
          <li key={index} className={`${Style.typeJob} col-12 p-0 mb-2`}>
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
        <div className="d-flex align-items-baseline justify-content-between">
          <label className={StyleHeader["labelHeader"]}>
            <NavLink to="/">
              <span className={StyleHeader["fiverChange"]}>fiverr</span>
              <span className="docChange">.</span>
            </NavLink>
          </label>
          <ul className={`${StyleHeader.ulHeader}`}>
            <li className={`${StyleHeader.liHeader}`}>
              <NavLink className={StyleHeader["singinStyle"]} to="/">
                Sign in
              </NavLink>
            </li>
            <li className={`${StyleHeader.liHeader}`}>
              <NavLink className={StyleHeader["joinStyle"]} to="/">
                Join
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div
        style={{
          height: 50,
          padding: "0 50px",
          margin: "20px 0",
          width: "100%",
        }}
      >
        <form className={StyleSearchForm["formSearch"]}>
          <input
            type="search"
            autofocus
            required
            placeholder="Find Services"
            onChange={handleChangeInput}
            value={wordEntered}
            size={20}
          />

          <button
            type="submit"
            onClick={() => {
              props.history.push("/danhsachcongviec/" + wordEntered);
            }}
          >
            Go
          </button>
        </form>
      </div>
      <div
        style={{
          width: "100%",
          padding: "0 50px",
          position: "absolute",
          zIndex: "3",
        }}
      >
        {" "}
        <ul
          className={
            filteredData != 0
              ? StyleSearchbar["search-bar-panel-active"]
              : StyleSearchbar["search-bar-panel"]
          }
        >
          {renderCongViec()}
        </ul>
      </div>
      <div style={{ padding: "5px 50px" }}>
        <div style={{ padding: 0, width: "100%" }}>
          <button
            style={{
              fontWeight: "bolder",
              fontSize: 20,
              background: "green",
            }}
            onClick={() => {
              setCategory(!category);
            }}
          >
            Categories
          </button>
          <i
            border
            className={`${Style.iconCategory} fas fa-angle-double-left`}
          ></i>
          <ul
            className={
              category ? Style["ulCategory_active"] : Style["ulCategory"]
            }
          >
            <NavLink to="/" className="row m-0 w-100">
              {renderTypejob()}
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
