import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getApiLoaiCongViec } from "../../Redux/Actions/LoaiCongViecAction/LoaiCongViecAction";
export default function LoaiCongViecDesktop(props) {
  let id = props.match.params.subtypejob;
  let dispatch = useDispatch();
  useEffect(() => {
    const actionLoaiCongViec = getApiLoaiCongViec(id);
    dispatch(actionLoaiCongViec);
  }, []);
  let { loaiCongViec } = useSelector(
    (rootReducer) => rootReducer.LoaiCongViecReducer
  );
  console.log(loaiCongViec.subTypeJobs);

  const renderLoaiCongViec = () => {
    return loaiCongViec.subTypeJobs.map((item, index) => {
      return (
        <div key={index}>
          <p>{item.name}</p>
        </div>
      );
    });
  };

  return (
    <div style={{ padding: "0 50px" }}>
      <div className="container text-center">
        <h4>{id}</h4>
      </div>
      {/* {renderLoaiCongViec()} */}
    </div>
  );
}
