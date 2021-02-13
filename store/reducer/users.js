import {
  IS_AUTHENTICATION,
  SET_USER,
  SET_TOKEN,
  SET_NILAI,
  SET_USER_LOGIN,
} from "../action/action-types";

const initState = {
  isAuthentication: false,
  token: null,
  user: {},
  isLoading: false,
  isSignout: false,
  nilaiArray: [],
  userLogin: {},
};

export default function usersState(state = initState, { type, payload }) {
  switch (type) {
    case IS_AUTHENTICATION:
      return (state = {
        ...state,
        isAuthentication: payload,
        isLoading: false,
      });
    case SET_TOKEN:
      return (state = { ...state, token: payload, isLoading: false });
    case SET_USER:
      return (state = { ...state, user: payload });
    case SET_NILAI:
      return (state = { ...state, nilaiArray: payload });
    case SET_USER_LOGIN:
      return (state = { ...state, userLogin: payload });
    default:
      return state;
  }
}
