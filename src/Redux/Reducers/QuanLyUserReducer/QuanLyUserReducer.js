import { TOKEN_LOGIN, USER_LOGIN } from "../../../Util/settings/config";
import {
  USER_DETAIL_ACTION,
  USER_LOGIN_ACTION,
} from "../../Types/QuanLyUserType";

//Vừa mở web lên đưa dữ liệu vào redux

// let usLogin = null;
// if (localStorage.getItem("userLogin")) {
//   //Lấy ra
//   usLogin = JSON.parse(localStorage.getItem("userLogin"));
// }

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const stateDefault = {
  //userLogin: usLogin,
  userLogin: user,
  thongTinUser: {},
};

export const QuanLyUserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case USER_LOGIN_ACTION: {
      // state.userLogin = action.data;
      const { idLogin } = action;

      localStorage.setItem(USER_LOGIN, JSON.stringify(idLogin));
      localStorage.setItem(TOKEN_LOGIN, idLogin.accessToken);
      return { ...state, userLogin: idLogin };
    }

    case USER_DETAIL_ACTION: {
      state.thongTinUser = action.thongTinUser;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
