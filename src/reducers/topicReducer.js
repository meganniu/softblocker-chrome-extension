import { ADD_TOPIC, DELETE_TOPIC, TOGGLE_TOPIC } from "../actions/types";

const addTopic = (state, action) => {
  let isPresent = false;
  const topic = action.payload.topic;
  let newState = [...state];
  if (topic.length > 0) {
    state.forEach((el) => {
      if (el.name === topic) {
        isPresent = true;
      }
    });

    if (isPresent === false) {
      newState.push({ name: topic, isActive: false, isTrained: false });
    }
  }

  return newState;
};

const deleteTopic = (state, action) => {
  return state.filter((el) => el.name !== action.payload.topic);
};

const toggleTopic = (state, action) => {
  return state.map((el) => {
    if (el.name === action.payload.topic && el.isTrained === true) {
      el.isActive = !el.isActive;
    }
    return el;
  });
};

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOPIC:
      return addTopic(state, action);
    case DELETE_TOPIC:
      return deleteTopic(state, action);
    case TOGGLE_TOPIC:
      return toggleTopic(state, action);
    default:
      return state;
  }
};
