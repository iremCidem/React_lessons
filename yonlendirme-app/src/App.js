import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import About from "./components/about";
import Iletişim from "./components/iletişim";
import Urünler from "./components/ürünler";
import { Routes, Route } from "react-router-dom";
import Urünitem from "./components/ürünitem";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/ürünler" element={<Urünler />} />
        <Route path="/ürünler/:id" element={<Urünitem />} />
        <Route path="iletisim" element={<Iletişim />} />
      </Routes>
    </div>
  );
}

export default App;
//React Router Dom kütüphanesini kullanacağız bu bize sayfalar arasında gezinmek için etkin bir yol sunar,Bu kütüphanede bulunan
// bileşenler (component) sayesinde uygulama sayfaları arasında gezinmek oldukça kolaylaşıyor.
//routing işlemi ile sayfa yenilenmeden sayfalar arası geçiş işlemini yapabiliriz.
//nested sayfa içinde sayfa açabilmek için kullandığımız yap, route içinde route kullanıyoruz.outlet ile de child elementi göstermemiz gerek.
