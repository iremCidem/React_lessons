import React from "react";
import { useParams } from "react-router-dom";
import { bilgiler } from "./ürünler";

export default function Urünitem() {
  const { id } = useParams();
  const selectedProduct = bilgiler.find((item) => item.id == id);

  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>ürün adı: {selectedProduct.ürün}</h1>
          <h1>fiyat: {selectedProduct.fiyat}</h1>
          <h1>özellikler: {selectedProduct.açıklama}</h1>
        </div>
      </div>
    </div>
  );
}
