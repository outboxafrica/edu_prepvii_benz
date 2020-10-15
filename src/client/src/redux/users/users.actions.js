import { GET_USERS, GET_USER, USER_ERROR } from "./users.types";
import axios from "axios";

const API = `https://api-team-benz.herokuapp.com/api/v1/`;
// get users
export const getUsers = () => async (dispatch) => {
  try {
    const res = axios.get(`${API}/users`);
    dispatch({
      type: GET_USERS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// Get user
export const getUser = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API}/users/${id}`);

    dispatch({
      type: GET_USER,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
