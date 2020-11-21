import { SET_ARTICLES } from "../action/action-types";

const initState = {
  articleList: [],
};

export default function articleState(state = initState, { type, payload }) {
  switch (type) {
    case SET_ARTICLES:
      return (state = {
        ...state,
        articleList: payload,
      });
    default:
      return state;
  }
}
