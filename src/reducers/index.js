import { combineReducers } from "redux";
import topicReducer from "./topicReducer";
import websiteReducer from "./websiteReducer";

export default combineReducers({
  topics: topicReducer,
  websites: websiteReducer,
  userId: (state = null) => state,
});
