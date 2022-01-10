const stateDefault = {
  loaiCongViec: {
    subTypeJobs: [],
  },
  congViecTheoLoaiCongViec: [],
};

export const LoaiCongViecReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "GET_API_LOAI_CONGVIEC": {
      state.loaiCongViec = action.data;
      return { ...state };
    }
    case "GET_API_CONGVIEC_THEO_LOAICONGVIECCHINH": {
      state.congViecTheoLoaiCongViec = action.data;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
