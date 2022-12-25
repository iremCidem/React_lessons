//component şeklinde bir navbar oluşturacağız.
//rfc ile react functional componenti oluşturduk.
//componentlerin ilk harfi büyük yazılmalı.(Navbar)

/*import React from 'react'

export default function Navbar() {
  return (
    <div>navbar</div>
  )
}olarak kullanabiliriz.*/
/*
import React from 'react'

function Navbar() {
  return (
    <div>navbar</div>
  )
  export default Navbar;
} olarakta kullanabiliriz.
*/

import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#">hakkımızda</a>
      <a href="#">anasayfa</a>
      <a href="#">iletişim</a>
    </div>
  );
};

export function Navbar_alt() {
  return <div className="navbar_alt"></div>;
}

export default Navbar;
