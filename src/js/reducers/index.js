import { combineReducers } from "redux";
import questionBankReducer from "./questionBankReducer";
import userReducer from "./userReducer";

export default combineReducers({
  user: userReducer,
  type: questionBankReducer
});
