import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getApiUserComment } from "../../../Redux/Actions/DanhSachCongViecActions/DanhSachCongViecActions";
import { getApiChiTietThongTinNguoiDung } from "../../../Redux/Actions/ThongTinNguoiDungAction/ThongTinNguoiDungAction";
export default function ThongTinNguoiDungDesktop() {
  let dispatch = useDispatch();

  let { userComment } = useSelector(
    (rootReducer) => rootReducer.UserCommentReducer
  );
  let { avatarState } = useSelector(
    (rootReducer) => rootReducer.ThongTinNguoiDungReducer
  );

  let [selectedFile, setSelectedFile] = useState(null);
  const fileSelectedHandle = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const fileUploadHandle = (event) => {
    event.preventDefault();
    let fd = new FormData();
    fd.append("avatar", selectedFile, selectedFile.name);
    const action = getApiChiTietThongTinNguoiDung(fd);
    dispatch(action);
  };
  useEffect(() => {
    const action = getApiUserComment("622ca2f3f85597001ca82fcb");
    dispatch(action);
  }, [avatarState]);
  return (
    <div>
      <div>
        <img src={userComment.avatar} alt={userComment.avatar} />
      </div>
      <div>
        <input type="file" name="image" onChange={fileSelectedHandle} />
        <button name="upload" onClick={fileUploadHandle}>
          Upload
        </button>
      </div>
    </div>
  );
}
