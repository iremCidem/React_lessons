/*propslar bir componentten başka bir componente veri akışını sağlamak için kullandığımız anahtar kelimelerdir.
propslar değiştirilemezler(readonly) ancak statelere atılarak değiştirilebilir.propslar aslında bir obje.*/

import { useState } from "react";
import "./App.css";

function App() {
  const [başlık, setBaşlık] = useState("react öğreniyorum.");
  return <div className="App">{başlık}</div>;
}

export default App;
