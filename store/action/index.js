import axios from "axios";
import {
  IS_AUTHENTICATION,
  SET_TOKEN,
  SET_USER,
  SET_USERS,
} from "./action-types";

const baseUrl = "http://192.168.43.7:3000";

export const registerUser = (payload) => {
  return (dispatch) => {
    axios
      .post(`${baseUrl}/app/register`, payload)
      .then(({ data }) => {
        dispatch(setUser(data));
      })
      .catch(console.log);
  };
};

export const setUser = (data) => {
  return {
    type: SET_USER,
    payload: data,
  };
};

export const loginUser = (payload) => {
  return (dispatch) => {
    axios
      .post(`${baseUrl}/app/login`, payload)
      .then(({ data }) => {
        dispatch(setToken(data));
        dispatch(setAuth(true));
      })
      .catch(console.log);
  };
};

export const setToken = (data) => {
  return {
    type: SET_TOKEN,
    payload: data.token,
  };
};

export const setAuth = (data) => {
  return {
    type: SET_TOKEN,
    payload: data,
  };
};
