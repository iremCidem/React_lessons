import "./App.css";
import Navbar, { Navbar_alt } from "./components/navbar";
import Body from "./components/body";

//arayüzde gördüğümüz seyler component yani bileşenlerden oluşuyor.amaç tekrar eden kod bloklarını engellemek.
//1.class componentler (rcc), 2.functional componentler (rfc) --> functional componentler hooklar ile kullanıldığında etkili.
function App() {
  return (
    <div className="App">
      <Navbar />
      <Navbar_alt />
      <Body />
    </div>
  );
}
//<navbar></navbar> şeklinde de yazabiliriz.ancak bunu araya birşeyler eklemek istediğimizde kullanırız.
export default App;
//return içinde js ve html kodlarını beraber kullanacağız.
