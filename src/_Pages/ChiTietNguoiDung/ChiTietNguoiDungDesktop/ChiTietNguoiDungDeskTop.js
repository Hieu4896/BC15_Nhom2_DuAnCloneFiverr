import React from "react";
import CongViecDaDatDeskTop from "./CongViecDaDatDeskTop";
import ThongTinNguoiDungDesktop from "./ThongTinNguoiDungDesktop";

export default function ChiTietNguoiDungDeskTop() {
  return (
    <div style={{ padding: "0 50px" }}>
      {" "}
      <div className="row">
        <div className="col-5">
          <ThongTinNguoiDungDesktop />
        </div>
        <div className="col-7">
          <CongViecDaDatDeskTop />
        </div>
      </div>
    </div>
  );
}
