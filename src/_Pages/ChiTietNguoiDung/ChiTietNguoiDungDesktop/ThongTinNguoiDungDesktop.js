import React, { useState } from "react";
import Style from "../ChiTietNguoiDungDeskTopCss/ChiTietNguoiDungDeskTop.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getApiChiTietThongTinNguoiDung } from "../../../Redux/Actions/ThongTinNguoiDungAction/ThongTinNguoiDungAction";
import { getApiUserComment } from "../../../Redux/Actions/DanhSachCongViecActions/DanhSachCongViecActions";
export default function ThongTinNguoiDungDesktop(props) {
  let { avatarState } = useSelector(
    (rootReducer) => rootReducer.ThongTinNguoiDungReducer
  );

  let { userComment } = useSelector(
    (rootReducer) => rootReducer.UserCommentReducer
  );

  let [avatar, setAvatar] = useState(userComment.name);
  let dispatch = useDispatch();
  const avatarHandle = (event) => {
    event.preventDefault();
    setAvatar(event.target.files[0]);
  };
  const avatarUpload = (event) => {
    event.preventDefault();
    const fd = new FormData();
    fd.append("avatar", avatar, avatar.name);
    const action = getApiChiTietThongTinNguoiDung(fd);
    dispatch(action);
  };

  useEffect(() => {
    const action = getApiUserComment("622ca2f3f85597001ca82fcb");
    dispatch(action);
  }, []);
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
        >
          {userComment.name}
        </p>
      </div>
      <div className={Style["buttonUpload"]}>
        <input type="file" onChange={avatarHandle} />
        <button onClick={avatarUpload}>Upload</button>
      </div>
    </div>
  );
}
