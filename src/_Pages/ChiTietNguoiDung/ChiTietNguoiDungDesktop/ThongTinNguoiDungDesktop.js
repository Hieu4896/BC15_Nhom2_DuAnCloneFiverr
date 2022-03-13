import React, { useRef, useState } from "react";
import Style from "../ChiTietNguoiDungDeskTopCss/ChiTietNguoiDungDeskTop.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getApiChiTietThongTinNguoiDung } from "../../../Redux/Actions/ThongTinNguoiDungAction/ThongTinNguoiDungAction";
import { getApiUserComment } from "../../../Redux/Actions/DanhSachCongViecActions/DanhSachCongViecActions";
export default function ThongTinNguoiDungDesktop(props) {
  let dispatch = useDispatch();

  let [avatar, setAvatar] = useState("");
  const avatarHandle = () => {
    const formData = new FormData();
    formData.append("avatar", avatar, avatar.name);
    const action = getApiChiTietThongTinNguoiDung(formData);
    dispatch(action);
  };

  let { avatarState } = useSelector(
    (rootReducer) => rootReducer.ThongTinNguoiDungReducer
  );
  console.log(avatar);
  return (
    <div className={Style["Infor_User_container"]}>
      <div className={Style["Avatar"]}>
        <img
          src={avatar}
          alt={avatar}
          style={{ width: "50%", borderRadius: "50%" }}
        />
        <p
          style={{
            color: "green",
            fontWeight: "bolder",
            fontSize: 20,
          }}
        ></p>
      </div>
      <div className={Style["buttonUpload"]}>
        <input
          type="file"
          onChange={(event) => {
            setAvatar(event.target.files[0]);
          }}
        />
        <button onClick={avatarHandle}>Upload</button>
      </div>
    </div>
  );
}
