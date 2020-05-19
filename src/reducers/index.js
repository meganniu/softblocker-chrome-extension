import { combineReducers } from "redux";
import topicReducer from "./topicReducer";
import websiteReducer from "./websiteReducer";

export default combineReducers({
  labels: topicReducer,
  websites: websiteReducer,
});
