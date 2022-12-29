import React, { useState } from "react";
import "./App.css";
import Içerik from "./components/içerik";

const tema = {
  dark: { backgroundColor: "black", color: "white" },
  light: { backgroundColor: "white", color: "black" },
}; // bu temayı kullanabilmek için bir state değerinde tutmamız gerekiyor.
export const TemaVerisi = React.createContext(); //aktaracağımız veriyi oluşturuyoruz.
function App() {
  const [değer, setDeğer] = useState(tema.dark);
  function değiştir(){
if(değer === tema.dark){
  setDeğer(tema.light)
}
else{
  setDeğer(tema.dark)
}
  }
  return (
    <div className="App">
      <button onClick={değiştir} style={{width:"80px"}}> 
      {değer === tema.dark ? "light" : "dark"}
      </button>
      <TemaVerisi.Provider value={değer}>
        <Içerik />
      </TemaVerisi.Provider>
    </div>
  );
}

export default App;
//useContext Hooku kullanacağız.
/*<TemaVerisi>
        <Içerik />     burada hangi componentler bu veriyi kullanacaksa o componentleri içine alıyoruz.
      </TemaVerisi> */
