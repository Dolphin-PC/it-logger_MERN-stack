import { combineReducers } from "redux";
import logsReducer from "./logsReducer";
import techsReducer from "./techsReducer";

export default combineReducers({
   log: logsReducer,
   tech: techsReducer,
});
