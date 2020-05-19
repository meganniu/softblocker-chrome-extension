import { ADD_TOPIC, DELETE_TOPIC, TOGGLE_TOPIC } from "./types.js";

export const addTopic = (topic) => {
  return (dispatch) => {
    dispatch({ type: ADD_TOPIC, payload: { topic } });
  };
};

export const deleteTopic = (topic) => {
  return (dispatch) => {
    dispatch({ type: DELETE_TOPIC, payload: { topic } });
  };
};

export const toggleTopic = (topic) => {
  return (dispatch) => {
    dispatch({ type: TOGGLE_TOPIC, payload: { topic } });
  };
};
