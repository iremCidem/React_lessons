import { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'

function App() {
  
  const [day,setDay] = useState("");
  const [test,setTest] = useState("Veri Bekleniyor");
  const [patient,setPatient] = useState("Veri Bekleniyor");
  const [death,setDeath] = useState("Veri Bekleniyor");
  
  useEffect(() => {axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
  .then((response) => {
    setDeath(response.data[day].deaths)
    setPatient(response.data[day].patients)
    setTest(response.data[day].totalTests)
    

  } )
  .catch((err) => console.log(err) )
}, [day])
  

 
  
  return <div className="App">
    
  <div className="container mt-5 ">
 <div className="row justify-content-md-center">
  <div className="col col-md-8">
    <h2 className="display-5 mb-3 text-light">TÜRKİYE COVID-19 VERİLERİ</h2>
    <input type="text" className="form-control" placeholder="GG/AA/YY" onChange={(e) => {setDay(e.target.value)}}  />
    <table className="table text-start text-light">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Test Sayısı</th>
      <th scope="col">Hasta Sayısı</th>
      <th scope="col">Vefat Sayısı</th>
    </tr>
  </thead>
  <tbody>
    <tr className={test==="Veri Bekleniyor" ? "bg-danger" : "bg-success"}>
      <td>{day}</td>
      <td>{test}</td>
      <td>{patient}</td>
      <td>{death}</td>
    </tr>
    
  </tbody>
</table>
  </div>
 </div>
  </div>
  </div>;
}

export default App;
