import axios from "axios";
import { http, DOMAIN } from "../../../Util/Setting";
export const getApiDanhSachCongViec = () => {
  return (dispatch) => {
    //Gọi api ....
    let promise = http.get(`${DOMAIN}/api/jobs`);
    promise.then((result) => {
      dispatch({
        type: "GET_API_DANHSACH_CONGVIEC",
        data: result.data,
      });
    });
    console.log(promise);
  };
};

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
export const getApiLoaiCongViec = (id) => {
  return async (dispatch) => {
    try {
      let result = await http.get(`${DOMAIN}/api/type-jobs/${id}`);

      console.log("result", result);
      //SAu khi lây được dữ liệu về thì cập nhật dữ liệu vào redux
      dispatch({
        type: "GET_API_LOAI_CONGVIEC",
        data: result.data,
      });
    } catch (err) {
      console.log("err", err.response?.data);
    }
  };
};

export const getApiCongViecTheoLoaiCongViecChinh = (id) => {
  return async (dispatch) => {
    try {
      let result = await http.get(
        `${DOMAIN}/api/jobs/by-type?type=${id}&skip=0&limit=12`
      );

      console.log("result", result);
      //SAu khi lây được dữ liệu về thì cập nhật dữ liệu vào redux
      dispatch({
        type: "GET_API_CONGVIEC_THEO_LOAICONGVIECCHINH",
        data: result.data,
      });
    } catch (err) {
      console.log("err", err.response?.data);
    }
  };
};
