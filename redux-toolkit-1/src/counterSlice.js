//slice : içinde state reducer ve action bulunduran parça.
//stateleri değiştirmek için actionları tanımlıyoruz.
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
const counterSlice = createSlice({
  name: "Counter", //statein adı
  initialState: initialState, //statein ilk durumu
  reducers: {
    //statei değiştirecek olan actionlar
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
//burada 2 adet action tanımladık.actionları reducer içinde tanımlıyoruz.
//hem reduceri hem de actionu export edeceğiz, reducer store için, actionda işlemleri yapacağımız yerde gerekli.

export const CountReducer = counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
