import { useState } from "react";
import "./App.css";
import Content from './components/content'

function App() {
 
  const persons = [{name:"irem",message:"React props öğreniyorum."},{name:"batu",message:"React props biliyorum."},{name:"zey",message:"React props nedir."}]
  return <div className="App">
   {persons.map((person) => (<Content names={person.name} messages={person.message}/>))}
  </div>;
}

export default App;
