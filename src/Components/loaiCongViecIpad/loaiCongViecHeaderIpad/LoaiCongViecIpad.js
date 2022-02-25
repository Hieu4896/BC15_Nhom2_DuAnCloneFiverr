import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import _, { debounce } from "lodash";
import {
  getApiCongViecTheoLoaiCongViecChinh,
  getApiLoaiCongViec,
} from "../../../Redux/Actions/LoaiCongViecActions/LoaiCongViecAntion";
import Style from "./loaiCongViecIpad.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
export default function LoaiCongViecIpad(props) {
  let id = props.match.params.subtypejob;

  const { loaiCongViec } = useSelector(
    (rootReducer) => rootReducer.LoaiCongViecReducer
  );
  const { congViecTheoLoaiCongViec } = useSelector(
    (rootReducer) => rootReducer.LoaiCongViecReducer
  );
  const [loading, setLoading] = useState(false);

  const renderLoaiCongViec = () => {
    return loaiCongViec.subTypeJobs.map((value, index) => {
      return (
        <li className={Style["liLoaiCongViec"]}>
          {" "}
          <NavLink
            style={{ color: "black" }}
            to={`/danhsachcongviec/${value.name}`}
            key={index}
          >
            {value.name}
          </NavLink>
        </li>
      );
    });
  };
  const renderCongViecTheoLoaiCongViec = () => {
    return congViecTheoLoaiCongViec.map((job, index) => {
      return (
        <div className="col-4" key={index}>
          <NavLink to={`/danhsachcongviec/${job.name}`}>
            {" "}
            <img src={job.image} alt="" width="100%" />
          </NavLink>

          <p style={{ fontSize: 12, marginTop: "10px" }}>{job.name}</p>
        </div>
      );
    });
  };
  let dispatch = useDispatch();
  useEffect(() => {
    let timeOut = setTimeout(() => {
      const actionLoaiCongViec = getApiLoaiCongViec(id);
      const actionCongViecTheoLoaiCongViecChinh =
        getApiCongViecTheoLoaiCongViecChinh(id);
      dispatch(actionLoaiCongViec);
      dispatch(actionCongViecTheoLoaiCongViecChinh);
      setLoading(true);
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);
  useEffect(() => {
    const actionLoaiCongViec = getApiLoaiCongViec(id);
    const actionCongViecTheoLoaiCongViecChinh =
      getApiCongViecTheoLoaiCongViecChinh(id);
    dispatch(actionLoaiCongViec);
    dispatch(actionCongViecTheoLoaiCongViecChinh);
  }, [id]);

  return (
    <div style={{ position: "relative" }}>
      {loading ? (
        <div style={{ padding: "0 50px" }}>
          <h2 style={{ textAlign: "center", padding: "20px 0", fontSize: 30 }}>
            {loaiCongViec.name}
          </h2>
          <div className="row">
            <div className="col-4">
              <h6 style={{ fontSize: 17, padding: "10px 0" }}>
                {loaiCongViec.name}
              </h6>
              <ul style={{ listStyle: "none", padding: "20px 0" }}>
                {" "}
                {renderLoaiCongViec()}
              </ul>
            </div>
            <div className="col-8">
              <div className="row">{renderCongViecTheoLoaiCongViec()}</div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{ position: "absolute", right: "50%" }}
          class="spinner-grow text-success"
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
}
