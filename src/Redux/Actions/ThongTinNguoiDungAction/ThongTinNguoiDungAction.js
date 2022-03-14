import axios from "axios";
import { http, DOMAIN } from "../../../Util/Setting";
export const getApiChiTietThongTinNguoiDung = (avatar) => {
  console.log(avatar);
  return async (dispatch) => {
    try {
      let result = await http.post(`${DOMAIN}/api/users/upload-avatar`, avatar);
      console.log("result", result);
      //SAu khi lây được dữ liệu về thì cập nhật dữ liệu vào redux
      dispatch({
        type: "GET_API_CHANGE_INFOR_USER",
        data: result.data,
      });
    } catch (err) {
      console.log("err", err.response?.data);
    }
  };
};
