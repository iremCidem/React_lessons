//reducerları bir araya getirmek için combine reducer, sonrasında tanımlamak için configure reducer kullanıyoruz.
import { loginReducer } from "./feature/login/loginSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./feature/theme/themeSlice";

const rootReducer = combineReducers({
  loginReducer,
  themeReducer,
});

export const setupStore = () => {
  return configureStore({ reducer: rootReducer });
};
