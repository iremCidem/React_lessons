// useRef hooku dom elemanlarına ve özelliklerine ulaşmamızı sağlar. useRef(içine ilk referans değerini alır.)
import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [renk,setRenk] = useState("");
  const renkDeğişimi = useRef();
  const değişim = () => {
    document.body.style.backgroundColor = renkDeğişimi.current.value; // ref içindeki değeri atıyoruz.
    setRenk(()=> renkDeğişimi.current.value); //içine fonksiyon atamak daha doğru bir kullanım şekli
    
  }
  return <div className="App">
    <p>rengi girin</p>
    <input type="text" ref={renkDeğişimi} onChange={değişim} />
    <p>{renk}</p>
    
  </div>;
}

export default App;
