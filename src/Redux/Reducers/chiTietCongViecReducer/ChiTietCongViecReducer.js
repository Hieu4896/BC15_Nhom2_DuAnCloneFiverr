const stateDefault = {
  idChiTietCongViec: "1111111",
  thongTinCongViec: {},
  danhSachComment: [],
  danhSachCommentMoi: {
    content: "tao cũng thấy vậy",
    job: "60e5b578ed980c7344c64d7e",
  },
};

export const ChiTietCongViecReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "GET_API_ID_DETAIL": {
      state.idChiTietCongViec = action.data;
      return { ...state };
    }
    case "GET_API_INFOR_JOB": {
      state.thongTinCongViec = action.data;
      return { ...state };
    }
    case "GET_API_LIST_COMMENT": {
      state.danhSachComment = action.data;
      return { ...state };
    }
    case "GET_API_LIST_COMMENT_NEW": {
      state.danhSachCommentMoi = action.data;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
