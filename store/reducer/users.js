import {
  IS_AUTHENTICATION,
  SET_USER,
  SET_TOKEN,
  SET_NILAI,
} from "../action/action-types";

const initState = {
  isAuthentication: false,
  token: null,
  user: {},
  isLoading: false,
  isSignout: false,
  nilaiArray: [],
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
    default:
      return state;
  }
}
