import axios from "axios";
import { http, DOMAIN } from "../../../Util/Setting";
export const getApiLoaiCongViec = (id) => {
  return (dispatch) => {
    //Gọi api ....
    let promise = http.get(`${DOMAIN}/api/type-jobs/${id}`);
    promise.then((result) => {
      dispatch({
        type: "GET_API_LOAI_CONGVIEC",
        data: result.data,
      });
    });
    console.log(promise);
  };
};
