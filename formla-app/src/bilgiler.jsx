import React from "react";
import { useLocation } from "react-router-dom";

export default function Bilgiler() {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h2>Name: {state.isim} </h2>
      <h2>City: {state.sehir}</h2>
      <h2>Address: {state.adres}</h2>
      <h2>Date: {state.gün}</h2>
    </div>
  );
}
