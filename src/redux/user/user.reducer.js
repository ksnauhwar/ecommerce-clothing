import UserActionTypes from "./user.types";
const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS: {
      return {
        ...state,
        error: null,
        currentUser: action.payload,
      };
    }
    case UserActionTypes.GOOGLE_SIGN_IN_FAILURE: {
      return {
        ...state,
        currentUser: null,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}

export default userReducer;
