import { applyMiddleware, combineReducers, createStore } from "redux";
import { HomeReducer } from "./homeReducer/HomeReducer";
import reduxThunk from "redux-thunk";
import { DanhSachCongViecReducer } from "./danhSachCongViecReducer/DanhSachCongViecReducer";
import { LoaiCongViecReducer } from "./loaiCongViecReducer/LoaiCongViecReducer";
const rootReducer = combineReducers({
  HomeReducer,
  DanhSachCongViecReducer,
  LoaiCongViecReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
