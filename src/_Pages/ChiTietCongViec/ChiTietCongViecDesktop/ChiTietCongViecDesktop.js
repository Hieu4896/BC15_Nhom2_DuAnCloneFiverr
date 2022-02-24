import React from "react";
import DanhSachCommentDesktop from "./DanhSachCommentDesktop";
import DatCongViecDesktop from "./DatCongViecDesktop";
import ThongTinCongViecDesktop from "./ThongTinCongViecDesktop";

export default function ChiTietCongViecDesktop(props) {
  let idjob = props.match.params.idjob;
  return (
    <div>
      <ThongTinCongViecDesktop idjob={idjob} />
    </div>
  );
}
