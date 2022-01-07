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
