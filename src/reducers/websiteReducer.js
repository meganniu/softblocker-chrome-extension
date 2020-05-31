import { ADD_WEBSITE, DELETE_WEBSITE, TOGGLE_WEBSITE } from "../actions/types";

const addWebsite = (state, action) => {
  let isPresent = false;
  const website = action.payload.website;
  let newState = [...state];

  if (website.length > 0) {
    state.forEach((el) => {
      if (el.name === website) {
        isPresent = true;
      }
    });

    if (isPresent === false) {
      newState.push({ name: website, isActive: false });
    }
  }
  return newState;
};

const deleteWebsite = (state, action) => {
  return state.filter((el) => el.name !== action.payload.website);
};

const toggleWebsite = (state, action) => {
  return state.map((el) => {
    if (el.name === action.payload.website) {
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
