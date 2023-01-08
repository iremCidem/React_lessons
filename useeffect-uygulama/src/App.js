//bir setInterval kullandıysak bunu temizlememiz lazım bunu da return fonksiyonu ile yapacağız.
//zamanı durdurmak için clearInterval kullanacağız.
import { useEffect, useState } from "react";
import "./App.css";
import "../src/";

function App() {
  const [counter, setCounter] = useState(10);
  const [yazi, setYazi] = useState();

  useEffect(() => {
    if (counter !== 0) {
      const interval = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [counter]);

  useEffect(() => {
    if (counter === 0) {
      setYazi("IYI SENELEEEER");
    }
  }, [counter]);

  return (
    <div className="App">
      <div
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: "blueviolet",
          color: "white",
          margin: "0 auto",
          lineHeight: "200px",
        }}
      >
        <h1>{counter}</h1>
      </div>
      <h2 className="yazi">{yazi}</h2>
    </div>
  );
}

export default App;
