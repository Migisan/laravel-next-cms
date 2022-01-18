import { combineReducers } from "@reduxjs/toolkit";
import testReducer from "./test";

const rootReducer = combineReducers({
  test: testReducer,
});

export default rootReducer;
