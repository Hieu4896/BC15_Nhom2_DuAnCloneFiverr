import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DanhSachCommentDesktop from "./DanhSachCommentDesktop";
import DatCongViecDesktop from "./DatCongViecDesktop";
import ThongTinCongViecDesktop from "./ThongTinCongViecDesktop";
import HomeFooter from "../../../Components/homeFooter/HomeFooter";
export default function ChiTietCongViecDesktop(props) {
  let idjob = props.match.params.idjob;
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    let timeout = setTimeout(() => {
      setLoading(true);
    }, 2500);
    return () => {
      clearTimeout(timeout);
    };
  }, [idjob]);

  return (
    <div>
      {loading ? (
        <div>
          <div style={{ position: "relative", padding: "50px 50px" }}>
            <div className="row m-0 p-0 justify-content-between">
              <div className="col-7 p-0 m-0">
                <ThongTinCongViecDesktop idjob={idjob} />
                <DanhSachCommentDesktop idjob2={idjob} />
              </div>
              <div className="col-4 p-0 m-0">
                <DatCongViecDesktop idjob3={idjob} />
              </div>
            </div>
          </div>
          <HomeFooter />
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
