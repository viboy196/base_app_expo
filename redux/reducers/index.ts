import { combineReducers } from "redux";
import authReducer from "../features/authSlices";

export default combineReducers({
  auth: authReducer,
});
