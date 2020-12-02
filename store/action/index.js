import React from "react";
import axios from "axios";
import {
  IS_AUTHENTICATION,
  SET_TOKEN,
  SET_USER,
  SET_USERS,
  SET_WACANAS,
  SET_ARTICLES,
  SET_QUESTIONS,
  SET_NILAI,
  SIGN_IN,
  RESTORE_TOKEN,
  SIGN_OUT,
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
    type: SIGN_IN,
    payload: data.token,
  };
};

export const logoutUser = () => {
  return {
    type: SIGN_OUT,
  };
};

export const setAuth = (data) => {
  return {
    type: SET_TOKEN,
    payload: data,
  };
};

export const restoreToken = (data) => {
  return {
    type: RESTORE_TOKEN,
    payload: data,
  };
};

export const getWacanas = () => {
  return (dispatch) => {
    axios
      .get(`${baseUrl}/app/wacanas`)
      .then(({ data }) => {
        dispatch(setWacana(data.wacanas));
      })
      .catch(console.log);
  };
};

export const setWacana = (data) => {
  return {
    type: SET_WACANAS,
    payload: data,
  };
};

export const getArticles = (id) => {
  return (dispatch) => {
    axios
      .get(`${baseUrl}/app/articles/${id}`)
      .then(({ data }) => {
        dispatch(setArticles(data.article));
      })
      .catch(console.log);
  };
};

export const setArticles = (data) => {
  return {
    type: SET_ARTICLES,
    payload: data,
  };
};

export const getQuestions = (id) => {
  return (dispatch) => {
    axios
      .get(`${baseUrl}/app/questions/${id}`)
      .then(({ data }) => {
        dispatch(setQuestions(data.question));
      })
      .catch(console.log);
  };
};

export const setQuestions = (data) => {
  return {
    type: SET_QUESTIONS,
    payload: data,
  };
};

export const getNilai = (id) => {
  return (dispatch) => {
    axios
      .get(`${baseUrl}/app/nilai/${id}`)
      .then(({ data }) => {
        dispatch(setNilai(data.nilai));
      })
      .catch(console.log);
  };
};

export const setNilai = (data) => {
  return {
    type: SET_NILAI,
    payload: data,
  };
};
