import { createSlice } from "@reduxjs/toolkit";

interface QuizState {
  currentSlide: number;
}

const initialState: QuizState = {
  currentSlide: 0,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    nextSlide: (state) => {
      state.currentSlide += 1;
    }
  }
});


export const { nextSlide } = quizSlice.actions;

export const quizReducer = quizSlice.reducer;

