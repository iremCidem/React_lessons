//öncelikle içine statelerimizi ekleyeceğimiz store yapısını oluşturalım.configurestore ile storumuzu yapılandırıyoruz.
//storu export ediyoruz ki dışarda kullanabilelim.
import { configureStore } from "@reduxjs/toolkit";
import { CountReducer } from "../counterSlice";

export const store = configureStore({
  reducer: { Counter: CountReducer },
});
