import "./App.css";
import Header from "./components/header";
import { GlobalProvider } from "./context/globalState";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Navbar />
        <Header />
      </GlobalProvider>
    </div>
  );
}

export default App;
