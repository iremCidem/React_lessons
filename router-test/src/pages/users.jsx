import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div className="userdiv">
      <h1>USERS</h1>
      {data.map((user) => (
        <Link to={`/users/${user.id}`} state={user}>
          {/* user bilgisini link ile taşıdığımız için sadece linke tıkladığımızda görebiliriz. */}
          <li className="users">{user.name}</li>
        </Link>
      ))}
    </div>
  );
}
