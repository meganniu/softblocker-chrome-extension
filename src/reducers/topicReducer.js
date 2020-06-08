import {
  ADD_TOPIC,
  DELETE_TOPIC,
  TOGGLE_TOPIC,
  REQUEST_TOPICS,
  RECIEVE_TOPICS,
  START_TOPIC_TRAINING,
  END_TOPIC_TRAINING,
} from "../actions/types";

const addTopic = (state, action) => {
  let isPresent = false;
  const topic = action.payload.topic;
  let newState = Object.assign({}, state);
  if (topic.length > 0) {
    newState.list.forEach((el) => {
      if (el.name === topic) {
        isPresent = true;
      }
    });

    if (isPresent === false) {
      newState.list.push({ name: topic, isActive: false, isTrained: false });
    }
  }

  return newState;
};

const deleteTopic = (state, action) => {
  return Object.assign({}, state, {
    list: state.list.filter((el) => el.name !== action.payload.topic),
  });
};

const toggleTopic = (state, action) => {
  return Object.assign({}, state, {
    list: state.list.map((el) => {
      if (el.name === action.payload.topic && el.isTrained === true) {
        el.isActive = !el.isActive;
      }
      return el;
    }),
  });
};

const requestTopics = (state, action) => {
  return Object.assign({}, state, { isFetching: true });
};

const recieveTopics = (state, action) => {
  const list = action.payload.topics.map((el) => ({
    name: el.name,
    isTrained: el.isTrained,
    isActive: el.isTrained,
  }));

  list.sort((lhs, rhs) => (lhs.name > rhs.name ? 1 : -1));
  return Object.assign({}, state, {
    isFetching: false,
    list,
  });
};

const startTopicTraining = (state, action) => {
  return Object.assign({}, state, { isTraining: true });
};

const endTopicTraining = (state, action) => {
  return Object.assign({}, state, { isTraining: false });
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
    case REQUEST_TOPICS:
      return requestTopics(state, action);
    case RECIEVE_TOPICS:
      return recieveTopics(state, action);
    case START_TOPIC_TRAINING:
      return startTopicTraining(state, action);
    case END_TOPIC_TRAINING:
      return endTopicTraining(state, action);
    default:
      return state;
  }
};
