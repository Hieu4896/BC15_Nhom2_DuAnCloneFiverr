const stateDefault = {
  danhSachCongViec: [],
  typeJob: [],
};

export const DanhSachCongViecReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "GET_API_DANHSACH_CONGVIEC": {
      state.danhSachCongViec = action.data;
      return { ...state };
    }
    case "GET_API_TYPEJOB": {
      state.typeJob = action.data;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
