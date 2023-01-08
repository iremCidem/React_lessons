import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    Name: " ",
    Surname: " ",
    Country: " ",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/formDetail", { state: form });
  };

  return (
    <div className="form-page">
      <form action="/action_page.php" className="form">
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
          onChange={(e) => setForm({ ...form, Name: e.target.value })}
        />
        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
          onChange={(e) => setForm({ ...form, Surname: e.target.value })}
        />
        <label for="country">Country</label>
        <select
          id="country"
          name="country"
          onChange={(e) => setForm({ ...form, Country: e.target.value })}
        >
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}
