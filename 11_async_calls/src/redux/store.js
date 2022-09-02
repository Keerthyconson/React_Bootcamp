import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: userReducer,
  middleware: [logger, thunk],
});
export default store;
