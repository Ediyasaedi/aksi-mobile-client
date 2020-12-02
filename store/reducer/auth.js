import { RESTORE_TOKEN, SIGN_IN, SIGN_OUT } from "../action/action-types";

const initState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

export default function authState(state = initState, { type, payload }) {
  switch (type) {
    case RESTORE_TOKEN:
      return {
        ...state,
        userToken: payload,
        isLoading: false,
      };
    case SIGN_IN:
      return {
        ...state,
        isSignout: false,
        userToken: payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignout: true,
        userToken: null,
      };
    default:
      return state;
  }
}
