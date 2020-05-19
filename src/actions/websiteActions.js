import { ADD_WEBSITE, DELETE_WEBSITE, TOGGLE_WEBSITE } from "./types";

export const addWebsite = (website) => {
  return (dispatch) => {
    dispatch({ type: ADD_WEBSITE, payload: { website } });
  };
};

export const deleteWebsite = (website) => {
  return (dispatch) => {
    dispatch({ type: DELETE_WEBSITE, payload: { website } });
  };
};

export const toggleWebsite = (website) => {
  return (dispatch) => {
    dispatch({ type: TOGGLE_WEBSITE, payload: { website } });
  };
};
