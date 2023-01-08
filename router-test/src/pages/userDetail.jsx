import React, { useEffect, useState } from "react";
import { json, useParams, Link, useLocation } from "react-router-dom";

export default function UserDetail() {
  const { state } = useLocation();
  const [select, setSelect] = useState(state);
  const { id } = useParams();
  useEffect(() => {
    if (!select) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((json) => setSelect(json));
    }
  }, [id, select]);

  return (
    <div>
      <h3>Name: {select?.name}</h3>
      <h3>Username: {select?.username}</h3>
      <h3>Email: {select?.email}</h3>
      {/* <h3>Name: {state?.name}</h3>
      <h3>Username: {state?.username}</h3>
      <h3>Email: {state?.email}</h3> */}
    </div>
  );
}
