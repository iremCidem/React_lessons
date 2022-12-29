/*propslar bir componentten başka bir componente veri akışını sağlamak için kullandığımız anahtar kelimelerdir.
propslar değiştirilemezler(read only) ancak statelere atılarak değiştirilebilir.propslar aslında bir objedir.*/

import { useState } from "react";
import "./App.css";
import Container from "./components/container";

function App() {
  const [başlik, setBaşlik] = useState("React öğreniyorum.");
  const number = 123;
  return (
    <div className="App">
      <Container title={başlik} number={number} />
      <button
        onClick={() => {
          setBaşlik("başlık değiştirildi.");
        }}
      >
        başlığı değiştir.
      </button>
    </div>
  );
}

export default App;
// <Container title={başlik} number={number} /> bu kısımda containera props olarak başlık ve numberi gönderdik.
