import {
  VALIDATE_USER,
  VALIDATE_USER_SUCCESS,
  VALIDATE_USER_FAILURE,
} from "./../actions/types";
const initialState = {
  userDetails: {
    username: "",
    password: ""
  },
  loading: false,
  success: false,
  errorDetails: {},
  error: false,
  users: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case VALIDATE_USER:
      return {
        ...state,
        loading: true
      };
    case VALIDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.payload,
        success: true,
        error: false
      };
    case VALIDATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        errorDetails: action.error
      };
    default:
      return state;
  }
}
