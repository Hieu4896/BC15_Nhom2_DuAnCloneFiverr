const stateDefault = {
  userCreated: {},
};

export const UserCreatedReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "GET_API_USER_CREATED": {
      state.userCreated = action.data;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
