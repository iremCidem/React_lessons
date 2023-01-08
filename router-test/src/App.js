import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Form from "./pages/form";
import UserDetail from "./pages/userDetail";
import Users from "./pages/users";
import FormDetail from "./pages/formDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navbar />} />
        <Route path="users" element={<Users />} />
        <Route path="form" element={<Form />} />
        <Route path="users/:id" element={<UserDetail />} />
        <Route path="formDetail" element={<FormDetail />} />
      </Routes>
    </div>
  );
}

export default App;
