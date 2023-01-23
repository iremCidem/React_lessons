//loginaction ve logout action içine payloadları yazıyoruz.
//dispatch ile yeni statelerimizi gönderdik.
import React from "react";
import { useDispatch } from "react-redux";
import { loginAction, logoutAction } from "../store/feature/login/loginSlice";

export default function LoginComp() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Login Component</h1>
      <button
        onClick={() => {
          dispatch(loginAction({ name: "irem", surname: "çidem" }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logoutAction());
        }}
      >
        Logout
      </button>
    </div>
  );
}
