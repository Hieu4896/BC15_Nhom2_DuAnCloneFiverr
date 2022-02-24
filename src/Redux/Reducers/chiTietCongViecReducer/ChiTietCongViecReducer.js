const stateDefault = {
  thongTinCongViec: {},
};

export const ChiTietCongViecReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "GET_API_INFOR_JOB": {
      state.thongTinCongViec = action.data;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
