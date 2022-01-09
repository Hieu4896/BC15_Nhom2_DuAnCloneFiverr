const stateDefault = {
  loaiCongViec: {},
};

export const LoaiCongViecReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "GET_API_LOAI_CONGVIEC": {
      state.loaiCongViec = action.data;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
