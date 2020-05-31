import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  websites: [{ name: "youtube.com", isActive: false }],
  topics: [{ name: "Einstein", isActive: false, isTrained: false }],
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  // applyMiddleware(...middleware),
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
