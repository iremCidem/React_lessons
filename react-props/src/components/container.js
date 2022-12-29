import React from "react";
import Header from "./header";

export default function Container(props) {
  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        border: "1px solid black",
        margin: "0 auto",
      }}
    >
      <Header title={props.title} numara={props.number}>
        bu bir child componentten geliyor.
      </Header>
    </div>
  );
}
