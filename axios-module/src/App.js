import "./App.css";
import axios from "axios";
import React,{useState,useEffect} from 'react'
//Axios, client side uygulamalarda HTTP çağrılarının kolayca yapılmasını sağlayan bir javascript kütüphanesidir.
//Apilerden veri çekmek için kullanılan bir npm paketi
function App() {
 
  const [inputVeri,setInputVeri] = useState();
  const [title, setTitle] =useState();
  const veriyiAl = (e) => {
    setInputVeri(e.target.value);
  }
  useEffect( () => {axios.get("https://jsonplaceholder.typicode.com/posts").
  then((response) => setTitle(response.data[inputVeri-1].title) )
.catch((err) => console.log(err))},[inputVeri])
  return <div className="App">
   <h1>id'yi giriniz</h1>
   <input type="text" onChange={veriyiAl} />
   <p>title: {title}</p>
   <p>id:{inputVeri}</p>

  </div>;
}

export default App;
