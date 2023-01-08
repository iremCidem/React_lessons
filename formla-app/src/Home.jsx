import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    isim: " ",
    sehir: " ",
    gün: " ",
    adres: " ",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/bilgiler", { state: form });
  };
  return (
    <form action="/action_page.php" className="form">
      <h3>Bilgileri Giriniz</h3>
      <input
        type="text"
        placeholder="Your name.."
        onChange={(e) => setForm({ ...form, isim: e.target.value })}
      />
      <select onChange={(e) => setForm({ ...form, sehir: e.target.value })}>
        <option value="Eskişehir">Eskişehir</option>
        <option value="Antalya">Antalya</option>
        <option value="İzmir">İzmir</option>
      </select>
      <input
        type="date"
        name="bday"
        onChange={(e) => setForm({ ...form, gün: e.target.value })}
      />
      <textarea
        className="textArea"
        placeholder="Adresi giriniz"
        name="address"
        onChange={(e) => setForm({ ...form, adres: e.target.value })}
      />
      <button className="btn" onClick={handleSubmit}>
        Gönder
      </button>
    </form>
  );
};

export default Home;
