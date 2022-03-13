import React, { useEffect, useState } from "react";
import DatCongViecIphone from "./DatCongViecIphone";
import DanhSachCommentIphone from "./DanhSachCommentIphone";
import HomeFooterIphone from "../homeFooter/HomeFooterIphone";
import ThongTinCongViecIphone from "./ThongTinCongViecIphone";
export default function ChiTietCongViecIphone(props) {
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
              <div className="col-12 p-0 m-0">
                <ThongTinCongViecIphone idjob={idjob} />
                <DatCongViecIphone idjob3={idjob} />
                <DanhSachCommentIphone idjob2={idjob} />
              </div>
            </div>
          </div>
          <HomeFooterIphone />
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
