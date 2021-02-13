import { SET_QUESTIONS, SET_ANSWERS } from "../action/action-types";

const initState = {
  questionList: [],
  answers: [],
};

export default function questionState(state = initState, { type, payload }) {
  switch (type) {
    case SET_QUESTIONS:
      return (state = {
        ...state,
        questionList: payload,
      });
    case SET_ANSWERS:
      return (state = {
        ...state,
        answers: payload,
      });
    default:
      return state;
  }
}
