import { applyMiddleware, combineReducers, createStore } from "redux";
import { HomeReducer } from "./homeReducer/HomeReducer";
import reduxThunk from "redux-thunk";
import { DanhSachCongViecReducer } from "./danhSachCongViecReducer/DanhSachCongViecReducer";
const rootReducer = combineReducers({
  HomeReducer,
  DanhSachCongViecReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
