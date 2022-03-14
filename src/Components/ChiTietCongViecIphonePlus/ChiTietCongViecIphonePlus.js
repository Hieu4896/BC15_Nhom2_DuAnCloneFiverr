import React, { useEffect, useState } from "react";
import HomeFooterIphonePlus from "../../Components/homeFooter/HomeFooterIphonePlus";
import ThongTinCongViecIphonePlus from "../ChiTietCongViecIphonePlus/ThongTinCongViecIphonePlus";
import DatCongViecIphonePlus from "../ChiTietCongViecIphonePlus/DatCongViecIphonePlus";
import DanhSachCommentIphonePlus from "./DanhSachCommentIphonePlus";
export default function ChiTietCongViecIphonePlus(props) {
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
                <ThongTinCongViecIphonePlus idjob={idjob} />
                <DatCongViecIphonePlus idjob3={idjob} />
                <DanhSachCommentIphonePlus idjob2={idjob} />
              </div>
            </div>
          </div>
          <HomeFooterIphonePlus />
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
