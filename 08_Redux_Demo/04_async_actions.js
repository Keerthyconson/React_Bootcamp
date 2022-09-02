const redux = require("@reduxjs/toolkit");
const configureStore = redux.configureStore;
const { default: thunk } = require("redux-thunk");
const axios = require("axios");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

// State
const initialState = {
  loading: true,
  data: [],
  error: "",
};
// Actions
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsers = () => {
  return {
    type: FETCH_USERS_REQUEST,
    info: "Fetching users from the endpoint",
  };
};

const fetchSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    info: "API call successfully called",
    payload: users,
  };
};

const fetchFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    info: "API call failed",
    payload: error,
  };
};

// Reducers

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        error: "",
        loading: false,
        data: action.payload,
      };

    case FETCH_USERS_FAILURE:
      return {
        data: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// API call
const getUsersAPICall = () => {
  return function (dispatch, getState) {
    dispatch(fetchUsers());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // response.data has the request
        const users = response.data.map((user) => user.name);
        dispatch(fetchSuccess(users));
      })
      .catch((error) => {
        // error.message is the message
        dispatch(fetchFailure(error.message));
      });
  };
};

// Redux store
const store = configureStore({
  reducer: reducer,
  middleware: [thunk, logger],
  // (getDefaultMiddleware) => getDefaultMiddleware({
  //     thunk: {
  //         extraArgument: ""
  //     }
  // })
});
store.subscribe(() => {
  //   console.log(store.getState());
});

store.dispatch(getUsersAPICall());
