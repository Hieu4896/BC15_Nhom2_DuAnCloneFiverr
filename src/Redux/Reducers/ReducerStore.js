import { applyMiddleware, combineReducers, createStore } from "redux";
import { HomeReducer } from "./homeReducer/HomeReducer";
import reduxThunk from "redux-thunk";
import { DanhSachCongViecReducer } from "./danhSachCongViecReducer/DanhSachCongViecReducer";
import { LoaiCongViecReducer } from "./loaiCongViecReducer/LoaiCongViecReducer";
import { ChiTietCongViecReducer } from "./chiTietCongViecReducer/ChiTietCongViecReducer";
const rootReducer = combineReducers({
  HomeReducer,
  DanhSachCongViecReducer,
  LoaiCongViecReducer,
  ChiTietCongViecReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
