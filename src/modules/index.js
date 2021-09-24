import { combineReducers } from "redux";
import session from "./session";
// import posts from "./posts";
import loading from "./loading";

const rootReducer = combineReducers({
  session,
  // posts,
  loading,
});

export default rootReducer;
