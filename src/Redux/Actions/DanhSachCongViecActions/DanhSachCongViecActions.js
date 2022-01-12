import axios from "axios";
import { http, DOMAIN } from "../../../Util/Setting";

export const getApiDanhSachCongViecTheoTen2 = () => {
  return async (dispatch) => {
    try {
      let result = await http.get(`${DOMAIN}/api/jobs/by-name?name=v`);

      console.log("result", result);
      //SAu khi lây được dữ liệu về thì cập nhật dữ liệu vào redux
      dispatch({
        type: "GET_API_CONGVIEC_THEOTEN",
        data: result.data,
      });
    } catch (err) {
      console.log("err", err.response?.data);
    }
  };
};
export const getApiTypeJob = () => {
  return async (dispatch) => {
    try {
      let result = await http.get(`${DOMAIN}/api/type-jobs`);

      console.log("result", result);
      //SAu khi lây được dữ liệu về thì cập nhật dữ liệu vào redux
      dispatch({
        type: "GET_API_TYPEJOB",
        data: result.data,
      });
    } catch (err) {
      console.log("err", err.response?.data);
    }
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
