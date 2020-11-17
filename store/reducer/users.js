import { IS_AUTHENTICATION, SET_USER, SET_TOKEN } from "../action/action-types";

const initState = {
  isAuthentication: false,
  token: null,
  user: {},
  isLoading: true,
  isSignout: false,
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
    default:
      return state;
  }
}
