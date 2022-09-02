import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";
import axios from "axios";
export const fetchUser = () => {
  return {
    type: FETCH_USERS_REQUEST,
    info: "Fetching from the endpoint",
  };
};

export const fetchSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    info: "Data successfully fetched",
    payload: users,
  };
};

export const fetchFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    info: "API call failed",
    payload: error,
  };
};

export const apiCallUsers = () => {
  // return another function
  return async function (dispatch, getState) {
    dispatch(fetchUser());
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = response.data.map((user) => user);
      dispatch(fetchSuccess(data));
    } catch (error) {
      const err = error.message;
      dispatch(fetchFailure(err));
    }
  };
};
