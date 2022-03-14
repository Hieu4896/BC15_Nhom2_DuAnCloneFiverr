const stateDefault = {
  avatarState: null,
};

export const ThongTinNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "GET_API_CHANGE_INFOR_USER": {
      console.log(action.data.avatar);
      state.avatarState = action.data.avatar;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
