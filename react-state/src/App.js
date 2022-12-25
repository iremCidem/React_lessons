import { useState } from "react";
import "./App.css";
//stateler değer tutmak ve güncellemek için kullanılırlar.
/*function App() {
  const [değer, setDeğer] = useState(0); //değer bizim değerimiz setDeğer ise onu güncellememize yarar,useState()
  //bir hook ve içine istediği değeri alabilir.bu değer bizim değerimize gider.stateleri return içinde kullanamayız.
  return (
    <div className="App">
      <p>
        <button onClick={() => setDeğer(değer + 1)}> arttır</button>
      </p>
      <p>{değer}</p>
      <p>
        <button onClick={() => setDeğer(değer - 1)}>azalt</button>
      </p>
    </div>
  );
}

export default App; */

//BİR DİĞER KULLANIM ŞEKLİ

function App() {
  const [değer, setDeğer] = useState(0);
  function Arttir() {
    setDeğer(değer + 1);
  }
  const Azalt = () => {
    setDeğer(değer - 1);
  };

  return (
    <div className="App">
      <p>
        <button onClick={Arttir}> arttır</button>
      </p>
      <p>{değer}</p>
      <p>
        <button onClick={Azalt}>azalt</button>
      </p>
    </div>
  );
}

export default App;
