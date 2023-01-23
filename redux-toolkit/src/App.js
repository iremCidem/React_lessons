import "./App.css";

import LoginComp from "./components/loginComp";
import ProfileComp from "./components/profileComp";
import ThemeComp from "./components/themeComp";

function App() {
  return (
    <div className="App">
      <LoginComp />
      <hr />
      <ProfileComp />
      <hr />
      <ThemeComp />
    </div>
  );
}

export default App;
