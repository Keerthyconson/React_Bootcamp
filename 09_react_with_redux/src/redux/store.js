import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
