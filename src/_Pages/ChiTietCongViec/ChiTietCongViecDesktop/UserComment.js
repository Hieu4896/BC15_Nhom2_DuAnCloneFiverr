import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getApiUserComment,
  getApiUserCreated,
} from "../../../Redux/Actions/DanhSachCongViecActions/DanhSachCongViecActions";

export default function UserComment(props) {
  let userId = props.userId;
  console.log(userId);
  let { userComment } = useSelector(
    (rootReducer) => rootReducer.UserCommentReducer
  );
  let dispatch = useDispatch();
  useEffect(() => {
    const action = getApiUserComment(userId);
    dispatch(action);
  }, [userId]);
  return (
    <Fragment>
      {userComment.avatar ? (
        <img
          src={userComment.avatar}
          alt={userComment.avatar}
          style={{ width: "5%" }}
        />
      ) : (
        <img
          src="/image/homeImg/unknowavatar.jpg"
          alt="/image/homeImg/unknowavatar.jpg"
          style={{ width: "5%" }}
        />
      )}
    </Fragment>
  );
}
