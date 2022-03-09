const stateDefault = {
  userComment: {},
};

export const UserCommentReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "GET_API_USER_COMMENT": {
      state.userComment = action.data;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
