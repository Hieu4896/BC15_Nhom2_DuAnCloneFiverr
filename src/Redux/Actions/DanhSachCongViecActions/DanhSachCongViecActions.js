import axios from "axios";
import { http, DOMAIN } from "../../../Util/Setting";
export const getApiTypeJob = () => {
  return (dispatch) => {
    //Gọi api ....
    let promise = http.get(`${DOMAIN}/api/type-jobs`);
    promise.then((result) => {
      dispatch({
        type: "GET_API_TYPEJOB",
        data: result.data,
      });
    });
    console.log(promise);
  };
};
export const setStateKeyWord = (keyWord) => {
  return (dispatch) => {
    dispatch({
      type: "SET_NEW_KEY_WORD",
      data: keyWord,
    });
  };
};
export const getApiDanhSachCongViec = () => {
  return async (dispatch) => {
    try {
      let result = await http.get(`${DOMAIN}/api/jobs`);

      console.log("result", result);
      //SAu khi lây được dữ liệu về thì cập nhật dữ liệu vào redux
      dispatch({
        type: "GET_API_DANHSACH_CONGVIEC",
        data: result.data,
      });
    } catch (err) {
      console.log("err", err.response?.data);
    }
  };
};
