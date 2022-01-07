import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getApiDanhSachCongViecTheoTen } from "../../Redux/Actions/HomeActions/HomeAction";

export const InputSeach = () => {
  let [filteredData, setFilteredData] = useState([]);
  let [wordEntered, setWordEntered] = useState("");

  let { congViecTheoTen } = useSelector(
    (rootReducer) => rootReducer.HomeReducer
  );
  let dispatch = useDispatch();
  useEffect(() => {
    const action = getApiDanhSachCongViecTheoTen();
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
  };
  const renderCongViec = () => {
    if (filteredData.length != 0) {
      return filteredData.slice(0, 15).map((prop, index) => {
        return (
          <NavLink className="aStyleSearchbar" to="/homeheader">
            <li className="liStyleSearchbar" key={index}>
              {prop.name}
            </li>
          </NavLink>
        );
      });
    } else {
      return "";
    }
  };
  return (
    <div className="header">
      <div className="search-bar">
        <form className="formInput">
          <input
            type="text"
            className="searchInput"
            placeholder='Try " Design "'
            onChange={handleChangeInput}
            value={wordEntered}
          />
          {wordEntered !== "" ? (
            <button
              style={{ border: "none", outline: "none", background: "none" }}
              onClick={clearInput}
            >
              <i class="fas fa-backspace"></i>
            </button>
          ) : (
            ""
          )}
          <button className="btn btn-success text-white buttonInput">
            Search
          </button>
        </form>
        <ul
          className={
            filteredData != 0 ? "search-bar-panel active" : "search-bar-panel"
          }
        >
          {renderCongViec()}
        </ul>
      </div>
    </div>
  );
};
