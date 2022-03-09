import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DanhSachCommentDesktop from "./DanhSachCommentDesktop";
import DatCongViecDesktop from "./DatCongViecDesktop";
import ThongTinCongViecDesktop from "./ThongTinCongViecDesktop";

export default function ChiTietCongViecDesktop(props) {
  let idjob = props.match.params.idjob;
  console.log(idjob);
  let { idChiTietCongViec } = useSelector(
    (rootReducer) => rootReducer.ChiTietCongViecReducer
  );
  console.log(idChiTietCongViec);
  let [loading, setLoading] = useState(false);
  let dispatch = useDispatch();
  useEffect(() => {
    let timeout = setTimeout(() => {
      const action = {
        type: "GET_API_ID_DETAIL",
        data: idjob,
      };
      dispatch(action);
      setLoading(true);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [idChiTietCongViec]);

  return (
    <div style={{ position: "relative", padding: "50px 50px" }}>
      {loading && idjob == idChiTietCongViec ? (
        <div className="row m-0 p-0">
          <div className="col-8 p-0 m-0">
            <ThongTinCongViecDesktop idjob={idjob} />
            <DanhSachCommentDesktop idjob2={idjob} />
          </div>
        </div>
      ) : (
        <div
          style={{
            position: "absolute",
            right: "50%",
          }}
          className="spinner-grow text-success"
          role="status"
        >
          <span className="sr-only text-success">Loading...</span>
        </div>
      )}
    </div>
  );
}
