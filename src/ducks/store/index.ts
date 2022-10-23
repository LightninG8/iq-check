import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { quizReducer } from "ducks/slices";


export const store = configureStore({
  reducer: {
    quiz: quizReducer
  }
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
