import { SET_WACANAS } from "../action/action-types";

const initState = {
  wacanaList: [],
};

export default function wacanaState(state = initState, { type, payload }) {
  switch (type) {
    case SET_WACANAS:
      return (state = {
        ...state,
        wacanaList: payload,
      });
    default:
      return state;
  }
}
