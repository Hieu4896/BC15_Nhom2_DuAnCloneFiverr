import axios from "axios";
import { http, DOMAIN } from "../../../Util/Setting";
export const getApiDanhSachCongViecTheoTen = () => {
  return (dispatch) => {
    //Gọi api ....
    let promise = http.get(`${DOMAIN}/api/jobs/by-name?name=v`);
    promise.then((result) => {
      dispatch({
        type: "GET_API_CONGVIEC_THEOTEN",
        data: result.data,
      });
    });
    console.log(promise);
  };
};
// export const getApiDanhSachCongViecTheoTen = () => {
//   return async (dispatch) => {
//     try {
//       let result = await http.get(`${DOMAIN}/api/jobs/by-name?name=v`);

//       console.log("congviectheoten", result);
//       //SAu khi lây được dữ liệu về thì cập nhật dữ liệu vào redux
//       await dispatch({
//         type: "GET_API_CONGVIEC_THEOTEN",
//         data: result.data,
//       });
//     } catch (err) {
//       console.log("err", err.response?.data);
//     }
//   };
// };
