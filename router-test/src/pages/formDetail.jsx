import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function FormDetail() {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h3>Name: {state?.Name}</h3>
      <h3>Surname: {state?.Surname}</h3>
      <h3>Country: {state?.Country}</h3>
      <button onClick={() => navigate(-1)}>BACK</button>
    </div>
  );
}
