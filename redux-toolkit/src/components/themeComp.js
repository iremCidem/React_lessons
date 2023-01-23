import React from "react";
import { useDispatch } from "react-redux";

export default function ThemeComp() {
  const dispatch = useDispatch();
  return (
    <div>
      <input type="text" />
      <button onClick={dispatch(() => {})}>DARK</button>
    </div>
  );
}
