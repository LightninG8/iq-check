import { createSlice } from "@reduxjs/toolkit";

interface ITestSlice {
  isTestStarted: boolean;
  currentSlide: number;
  resultPoints: number;
}

const initialState: ITestSlice = {
  currentSlide: 0,
  isTestStarted: false,
  resultPoints: 0
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    nextSlide: (state) => {
      state.currentSlide += 1;
    },
    startTest: (state) => {
      state.isTestStarted = true
    },
    addResultPoints: (state, action) => {
      state.resultPoints += action.payload
    },
    resetTest: (state) => {
      state = initialState;
    }
  }
});


export const { nextSlide, startTest, addResultPoints, resetTest } = testSlice.actions;
