// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./reducer";

// Create the Redux store using configureStore
const store = configureStore({
  reducer: courseReducer,
});

export default store;
