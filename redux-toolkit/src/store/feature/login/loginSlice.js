//createslice ile reducer ve actionlarımızı tanımlıyoruz.özellikleri içine obje olarak veriyoruz.
//reducer ve actionları oluşturduktan sonra dışarıda kullanmak için export ediyoruz.
import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", surname: "" };
export const LoginSlice = createSlice({
  name: "login",
  initialState: { value: initialState },
  reducers: {
    loginAction: (state, action) => {
      state.value = action.payload;
    },
    logoutAction: (state) => {
      state.value = initialState;
    },
  },
});
export const loginReducer = LoginSlice.reducer;
export const { loginAction, logoutAction } = LoginSlice.actions;
