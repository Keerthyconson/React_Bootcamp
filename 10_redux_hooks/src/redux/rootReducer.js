import { combineReducers } from "@reduxjs/toolkit";
import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

// export default rootReducer;
