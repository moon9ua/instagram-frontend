import { combineReducers } from "redux";
import session from "./session";

const rootReducer = combineReducers({
  user: session,
});

export default rootReducer;
