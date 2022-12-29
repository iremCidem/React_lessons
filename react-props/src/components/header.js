import React from "react";

export default function Header(props) {
  return (
    <div
      style={{
        width: "inherit",
        height: "100px",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <p>{props.title} </p>
      <p>{props.numara}</p>
      {props.children}
    </div>
  );
}
