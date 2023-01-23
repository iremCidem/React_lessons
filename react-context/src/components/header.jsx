import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";

export default function Header() {
  const { isim, id, setDeğer } = useContext(GlobalContext);
  return (
    <div>
      <h1>gelen veri: {isim}</h1>
      <p>id: {id}</p>
      <button
        className="btn btn-danger"
        onClick={() => {
          setDeğer("Link");
        }}
      >
        Değiştir
      </button>
    </div>
  );
}
//veriyi kullanmak için useContext kullanacağız.
