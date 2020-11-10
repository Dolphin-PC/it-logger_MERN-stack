import { combineReducers } from "redux";
import logsReducer from "./logsReducer";

export default combineReducers({
   log: logsReducer,
});
