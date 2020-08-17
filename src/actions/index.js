import { FETCH_POSTS, FETCH_USER } from "./actiontypes";
import jsonPlaceholder from "../api/jsonPlaceholder";
import _ from "lodash";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({
    type: FETCH_POSTS,
    payload: response.data,
  });
};

/*export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: FETCH_USER,
    payload: response.data,
  });
};*/

//-------------------------------------------------------------------
// note: can check in chrome under network tab > xhr
//With lodash, fetch once for same userid
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: FETCH_USER,
    payload: response.data,
  });
});
export const fetchUser = (id) => (dispatch) => {
  _fetchUser(id, dispatch);
};
