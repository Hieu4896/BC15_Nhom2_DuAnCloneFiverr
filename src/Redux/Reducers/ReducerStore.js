import { applyMiddleware, combineReducers, createStore } from "redux";
import { HomeReducer } from "./homeReducer/HomeReducer";
import reduxThunk from "redux-thunk";
import { DanhSachCongViecReducer } from "./danhSachCongViecReducer/DanhSachCongViecReducer";
import { LoaiCongViecReducer } from "./loaiCongViecReducer/LoaiCongViecReducer";
import { ChiTietCongViecReducer } from "./chiTietCongViecReducer/ChiTietCongViecReducer";
import { UserCreatedReducer } from "./danhSachCongViecReducer/UserCreatedReducer";
import { UserCommentReducer } from "./danhSachCongViecReducer/UserCommentReducer";
const rootReducer = combineReducers({
  HomeReducer,
  DanhSachCongViecReducer,
  LoaiCongViecReducer,
  ChiTietCongViecReducer,
  UserCreatedReducer,
  UserCommentReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
