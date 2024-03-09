import { configureStore } from "@reduxjs/toolkit";
import quesitonReducer from "./questionSlice";

export const store = configureStore({
  reducer: {
    question: quesitonReducer,
  },
});
