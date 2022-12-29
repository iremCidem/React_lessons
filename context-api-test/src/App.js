import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import { Provider } from "./components/Context/globalState";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Provider>
          <Header />
        </Provider>
      </div>
    </div>
  );
}

export default App;
//header componenti provider verisini kullanacak.
