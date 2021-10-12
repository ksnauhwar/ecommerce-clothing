import UserActionTypes from "./user.types";
const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS: {
      return {
        ...state,
        error: null,
        currentUser: action.payload,
      };
    }
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.SIGN_IN_FAILURE: {
      return {
        ...state,
        currentUser: null,
        error: action.payload,
      };
    }
    case UserActionTypes.SIGN_OUT_SUCCESS: {
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    }
    default:
      return state;
  }
}

export default userReducer;
