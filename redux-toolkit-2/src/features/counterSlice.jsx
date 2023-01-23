import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };
export const CounterSlice = createSlice({
  name: "Counter",
  initialState: initialState,
  reducers: {
    CountUp: (state) => {
      state.value += 1;
    },
    CountDown: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    incre: (state) => {
      state.value += state.value;
    },
  },
});

export default CounterSlice.reducer;
export const { CountDown, CountUp, incrementByAmount, incre } =
  CounterSlice.actions;
