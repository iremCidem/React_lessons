import React, { useContext } from "react";
//export ettiğimiz değeri burada kullanmadan önce import etmeliyiz.
import {TemaVerisi} from '../App'

export default function Içerik() {
  return <div style={useContext(TemaVerisi)}>
    
    <h1>React öğreniyorum</h1>
    <h2>useContext ile Componentler arası veri taşıma</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id totam quas aut officia obcaecati a quisquam,
         ut hic magni rerum.</p>
         
  </div>;
}
