import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { quizReducer } from "ducks/slices";
import { resultApi } from "ducks/api";

export const store = configureStore({
  reducer: {
    [resultApi.reducerPath]: resultApi.reducer,
    quiz: quizReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(resultApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
