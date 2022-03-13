import React, { useEffect, useState } from "react";
import HomeFooterIpad from "../../Components/homeFooter/HomeFooterIpad";
import ThongTinCongViecIpad from "./ThongTinCongViecIpad";
import DanhSachCommentIpad from "./DanhSachCommentIpad";
import DatCongViecIpad from "./DatCongViecIpad";
export default function ChiTietCongViecIpad(props) {
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
                <ThongTinCongViecIpad idjob={idjob} />
                <DatCongViecIpad idjob3={idjob} />
                <DanhSachCommentIpad idjob2={idjob} />
              </div>
            </div>
          </div>
          <HomeFooterIpad />
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
