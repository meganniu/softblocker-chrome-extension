import { ADD_WEBSITE, DELETE_WEBSITE, TOGGLE_WEBSITE } from "../actions/types";

const addWebsite = (state, action) => {
  let isPresent = false;
  state.forEach((el) => {
    if (el.name === action.website) {
      isPresent = true;
    }
  });
  if (isPresent === false) {
    state.push({ name: action.website, isActive: false });
  }
  return state;
};

const deleteWebsite = (state, action) => {
  return state.filter((el) => el.name !== action.website);
};

const toggleWebsite = (state, action) => {
  return state.map((el) => {
    if (el.name === action.website) {
      el.isActive = !el.isActive;
    }
    return el;
  });
};

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_WEBSITE:
      return addWebsite(state, action);
    case DELETE_WEBSITE:
      return deleteWebsite(state, action);
    case TOGGLE_WEBSITE:
      return toggleWebsite(state, action);
    default:
      return state;
  }
};
