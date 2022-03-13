import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getApiDanhSachComment,
  getApiDanhSachCommentMoi,
} from "../../Redux/Actions/ChiTietCongViecActions/ChiTietCongViecActions";
import Style from "./ThongTinCongViecIpad.module.css";
import UserComment from "../../_Pages/ChiTietCongViec/ChiTietCongViecDesktop/UserComment";
export default function DanhSachCommentIpad(props) {
  let [commentPerPage, setCommentPerPage] = useState(5);
  let { danhSachComment } = useSelector(
    (rootReducer) => rootReducer.ChiTietCongViecReducer
  );
  console.log(danhSachComment);
  let { danhSachCommentMoi } = useSelector(
    (rootReducer) => rootReducer.ChiTietCongViecReducer
  );
  console.log(danhSachCommentMoi);
  let [comment, setComment] = useState("");
  let dispatch = useDispatch();
  let newDanhSach = {
    content: comment,
    job: "60e5b578ed980c7344c64d7e",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const action = getApiDanhSachCommentMoi(newDanhSach);
    dispatch(action);
  };
  const handleChange = (e) => {
    e.preventDefault();
    const newComment = e.target.value;
    setComment(newComment);
  };
  useEffect(() => {
    const action = getApiDanhSachComment();
    dispatch(action);
  }, [danhSachCommentMoi]);

  const renderDanhSachComment = () => {
    return danhSachComment.slice(0, commentPerPage).map((item, index) => {
      return (
        <div key={index}>
          {item.user == null ? (
            <div style={{ borderTop: "1px solid #dadbdd" }}>
              <div className="d-flex align-items-center">
                <img
                  src="/image/homeImg/unknowavatar.jpg"
                  alt="/image/homeImg/unknowavatar.jpg"
                  style={{ width: "10%", borderRadius: "50%" }}
                />
                <p className={Style["userName"]}>Unknow</p>
              </div>
              <p style={{ fontSize: 14, marginLeft: 100, color: "#404145" }}>
                {item.content}
              </p>
            </div>
          ) : (
            <div style={{ borderTop: "1px solid #dadbdd" }}>
              <div className="d-flex align-items-center">
                <UserComment userId={item.user._id} />
                <p className={Style["userName"]}>{item.user.name}</p>
              </div>
              <p style={{ fontSize: 14, marginLeft: 100, color: "#404145" }}>
                {item.content}
              </p>
            </div>
          )}
        </div>
      );
    });
  };
  return (
    <div>
      {danhSachComment.length >= 1 ? (
        <div>
          <h3>What people said about this seller</h3>
          {commentPerPage > 5 ? (
            <p
              onClick={() => {
                setCommentPerPage(commentPerPage - 5);
              }}
              style={{ color: "green", cursor: "pointer" }}
            >
              {" "}
              - Close More{" "}
            </p>
          ) : (
            ""
          )}

          {renderDanhSachComment()}
          {commentPerPage <= danhSachComment.length ? (
            <p
              onClick={() => {
                setCommentPerPage(commentPerPage + 5);
              }}
              style={{ color: "green", cursor: "pointer" }}
            >
              {" "}
              + See More
            </p>
          ) : (
            ""
          )}

          <form onSubmit={handleSubmit} className={Style["box-container"]}>
            <div style={{ width: "100%", height: "100px", padding: 20 }}>
              <textarea
                placeholder="Hãy cho chúng tôi biết suy nghĩ của bạn ..."
                type="text"
                name={comment}
                value={comment}
                onChange={handleChange}
              />
            </div>
            <div className={Style["buttonDiv"]}>
              <button
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  outline: "none",
                  fontWeight: "bolder",
                  fontSize: 20,
                }}
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
