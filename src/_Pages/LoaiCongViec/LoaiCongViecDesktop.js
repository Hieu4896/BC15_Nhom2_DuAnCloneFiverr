import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import _, { debounce } from "lodash";
import {
  getApiCongViecTheoLoaiCongViecChinh,
  getApiLoaiCongViec,
} from "../../Redux/Actions/DanhSachCongViecActions/DanhSachCongViecActions";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
export default function LoaiCongViecDesktop(props) {
  let id = props.match.params.subtypejob;
  let dispatch = useDispatch();
  useEffect(() => {
    const actionLoaiCongViec = getApiLoaiCongViec(id);
    const actionCongViecTheoLoaiCongViecChinh =
      getApiCongViecTheoLoaiCongViecChinh(id);
    dispatch(actionLoaiCongViec);
    dispatch(actionCongViecTheoLoaiCongViecChinh);
  }, [id]);
  let { loaiCongViec } = useSelector(
    (rootReducer) => rootReducer.LoaiCongViecReducer
  );
  let { congViecTheoLoaiCongViec } = useSelector(
    (rootReducer) => rootReducer.LoaiCongViecReducer
  );

  const renderLoaiCongViec = () => {
    return loaiCongViec.subTypeJobs.map((value, index) => {
      return <p key={index}>{value.name}</p>;
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

          <p>{job.name}</p>
        </div>
      );
    });
  };
  return (
    <div style={{ padding: "0 50px" }}>
      <h2 style={{ textAlign: "center", padding: "20px 0" }}>
        {loaiCongViec.name}
      </h2>
      <div className="row">
        <div className="col-4">
          <h6 style={{ fontSize: 20, padding: "10px 0" }}>
            {loaiCongViec.name}
          </h6>
          {renderLoaiCongViec()}
        </div>
        <div className="col-8">
          <div className="row">{renderCongViecTheoLoaiCongViec()}</div>
        </div>
      </div>
    </div>
  );
}
