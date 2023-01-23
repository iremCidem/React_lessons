import image1 from "../image/image1.jpg";
import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div>
      <img src={image1} alt="bali" />
      <img src="image/image2.jpeg" alt="bali" />
    </div>
  );
}
//resim eklemek için ilk yöntem import etmektir.bu yöntem çok fazla resim ekleneceğinde işlevsiz kalır.
//ikinci yöntem ;image dosyasını public klasörü altına ekliyoruz çünkü public içine direkt erişim
// sağlanabilir. ki tüm componentler erişebilsin.burada import etmemiz gerekmiyor.
