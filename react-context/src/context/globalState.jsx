//burada global bir state oluşturacağız.
//İSİMLENDİRME YAPARKEN DAİMA BÜYÜK HARF KULLAN.GlobalContext-GlobalProvider
import { createContext, useState } from "react";
export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [değer, setDeğer] = useState("Home");
  return (
    <GlobalContext.Provider
      value={{ isim: "irem", id: 2125454, deger: değer, setDeğer }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
//globalContext ile context olayını kullanacağımızı belirttik.
//componentlere aktarım yapacak olan providerı oluşturduk.
//return içinde globalContext.provider içinden gelen verileri döndürüyoruz.
//göndereceğimiz veriyi value olarak tanımlıyoruz,obje olarak gönderiyoruz.
