//contextApi bize global bir data sağlar.

import { createContext } from "react";
export const GlobalContext = createContext();
//bir sağlayıcı oluşturuyoruz.
export const Provider = (props) => {
  return (
    <GlobalContext.Provider value={"irem"}>
      {props.children}
    </GlobalContext.Provider>
  );
};
//bu şekilde değer herkes tarafından kullanılabilir hale geldi.
