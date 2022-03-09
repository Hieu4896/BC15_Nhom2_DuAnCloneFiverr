import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiUserCreated } from "../../../Redux/Actions/DanhSachCongViecActions/DanhSachCongViecActions";

export default function UserCreated(props) {
  let userID = props.userCreated;
  let userComment = props.userComment;
  let { userCreated } = useSelector(
    (rootReducer) => rootReducer.UserCreatedReducer
  );
  let dispatch = useDispatch();
  useEffect(() => {
    const action = getApiUserCreated(userID);
    dispatch(action);
  }, []);

  return (
    <div className="row" style={{ padding: 10 }}>
      <div className="col-12 d-flex align-items-end ">
        <img
          src={userCreated.avatar}
          alt={userCreated.avatar}
          style={{ width: "20%", borderRadius: "50%" }}
        />
        <p style={{ fontSize: 13 }}>{userCreated.name}</p>
      </div>
    </div>
  );
}
