import {
  VALIDATE_USER,
  VALIDATE_USER_SUCCESS,
  VALIDATE_USER_FAILURE,
} from "./types";

export const validateUser = user => dispatch => {
  dispatch(setUserLoading());
  if(user) {
    dispatch({ type: VALIDATE_USER_SUCCESS, payload: user })
  }
  else {
    dispatch({ type: VALIDATE_USER_FAILURE, error: true })
  }
  
};
export const setUserLoading = () => {
  return {
    type: VALIDATE_USER
  };
};
