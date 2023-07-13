import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../features/Jobs/JobsSlice";
import counterReducer from "../features/counter/counterSlice";
import filterReducer from "../features/filters/filterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    jobs: jobsReducer,
    filters: filterReducer,
  },
});
