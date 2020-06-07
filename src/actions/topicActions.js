import axios from "axios";
import {
  ADD_TOPIC,
  DELETE_TOPIC,
  TOGGLE_TOPIC,
  REQUEST_TOPICS,
  RECIEVE_TOPICS,
} from "./types.js";

export const addTopic = (topic, userId) => {
  return (dispatch) => {
    axios({
      url: `${process.env.REACT_APP_DOMAIN}/api/profiles/${userId}/topics`,
      method: "post",
      data: { topic },
    })
      .then(() => {
        dispatch({ type: ADD_TOPIC, payload: { topic } });
      })
      .catch((err) => {
        console.log(err);
      });
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

export const fetchTopics = (userId) => {
  return (dispatch) => {
    dispatch({ type: REQUEST_TOPICS });
    axios({
      url: `${process.env.REACT_APP_DOMAIN}/api/profiles/${userId}/topics`,
      method: "get",
    })
      .then((response) => {
        let topics = [];
        for (var topic of Object.keys(response.data)) {
          topics.push({
            name: topic,
            isTrained: response.data[topic].isTrained,
          });
        }
        dispatch({
          type: RECIEVE_TOPICS,
          payload: { topics },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
