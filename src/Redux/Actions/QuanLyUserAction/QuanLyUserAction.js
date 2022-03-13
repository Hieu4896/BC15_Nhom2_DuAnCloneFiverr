import { quanLyUserService } from "../../../Services/QuanLyUserService";
import {
  USER_DETAIL_ACTION,
  USER_LOGIN_ACTION,
} from "../../Types/QuanLyUserType";
import { history } from "../../../App";
export const quanlyLoginAction = (idLogin) => {
  return async (dispatch) => {
    try {
      const result = await quanLyUserService.layDanhSachLogin(idLogin);
      if (result.data.statusCode === 200) {
        dispatch({
          type: USER_LOGIN_ACTION,
          idLogin: result.data,
        });
        console.log(result.data.content);

        history.goBack("/");
      }
    } catch (error) {
      console.log("Lỗi", error.response?.data);
    }
  };
};

export const quanlyThongTinUserAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyUserService.layThongTinUser();
      if (result.data.statusCode === 200) {
        dispatch({
          type: USER_DETAIL_ACTION,
          thongTinUser: result?.data?.content,
        });
        console.log("Api Post", result);
      }
    } catch (error) {
      console.log("Lỗi", error.response?.data);
    }
  };
};
