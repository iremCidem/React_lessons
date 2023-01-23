import { createSlice } from "@reduxjs/toolkit";

const initialState = " ";
export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: initialState },
  reducers: {
    themeAction: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const { themeAction } = themeSlice.actions;
