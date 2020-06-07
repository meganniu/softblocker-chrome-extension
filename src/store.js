import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  userId: "f0NMjg0XLjQAiZzJvIE9",
  websites: [{ name: "youtube.com", isActive: false }],
  topics: {
    // list: [{ name: "Einstein", isActive: false, isTrained: true }],
    list: [],
    isFetching: false,
  },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  // applyMiddleware(...middleware),
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
