import logo from "./logo.svg";
import "./App.css";

//html kodlarımızı return içinde yapıyoruz. tek bir parent element div olması gerekli, 2div kullanamıyoruz.
function App() {
  let name = "irem";
  return (
    <div className="App">
      <h1>merhaba</h1>
      <p>sdgsdfjdsfdsjkfhdsjkjfkdsfd</p>
      <h1>{10 + 10}</h1>
      <h1>10+10</h1>
      <h2>{"irem".toUpperCase()}</h2>
      <h1>merhaba {name}</h1>
      <h1 style={{ color: "red" }}>merhaba {name}</h1>
      <h1 className="deneme">{10 + 10}</h1>
    </div>
  );
  //süslü parantezler ile bunun bir javascript kodu olduğunu algıladı.
}

export default App;
