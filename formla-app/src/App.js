import "./App.css";
import { Route, Routes } from "react-router-dom";
import Bilgiler from "./bilgiler";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bilgiler" element={<Bilgiler />} />
      </Routes>
    </div>
  );
}

export default App;
