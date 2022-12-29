/*state içindeki değişimi yakalayıp ona uygun bir fonksiyon çalıştırmak ya da state oluşturduktan sonra
 onu temizlemek için useEffect hookunu kullanırız.*/
import React, { useState, useEffect } from 'react';
import "./App.css";

function Example() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("ilk başlık.")
  

  // componentDidMount ve componentDidUpdate kullanımına benzer bir kullanım sunar:
  useEffect(() => {
    // tarayıcının başlık bölümünü değiştirmemizi sağlar
    document.title = `You clicked ${count} times`;
    console.log(count);
    
  
  },[title]);  // bu şekilde eğer title değişirse bu fonksiyon çalışsın dedik.

  return (
   
    <div>
      <h1>{document.title}</h1>
      <button onClick={() => setCount(count + 1)}>
        arttır
      </button>
      <h1>{title}</h1>
      
      
      
    </div>
  );
}

export default Example;
