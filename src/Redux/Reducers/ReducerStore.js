import { applyMiddleware, combineReducers, createStore } from "redux";
import { HomeReducer } from "./homeReducer/HomeReducer";
import reduxThunk from "redux-thunk";
import { DanhSachCongViecReducer } from "./danhSachCongViecReducer/DanhSachCongViecReducer";
import { QuanLyUserReducer } from "./QuanLyUserReducer/QuanLyUserReducer";
const rootReducer = combineReducers({
  HomeReducer,
  DanhSachCongViecReducer,
  QuanLyUserReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
