import { SET_QUESTIONS } from "../action/action-types";

const initState = {
  questionList: [],
};

export default function questionState(state = initState, { type, payload }) {
  switch (type) {
    case SET_QUESTIONS:
      return (state = {
        ...state,
        questionList: payload,
      });
    default:
      return state;
  }
}
