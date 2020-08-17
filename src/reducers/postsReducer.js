import { FETCH_POSTS } from "../actions/actiontypes";
export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_POSTS:
      return payload;
    default:
      return state;
  }
};
