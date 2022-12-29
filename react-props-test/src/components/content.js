import React from "react";

export default function Content(props) {
  return (
    <div>
      <h1>Name: {props.names}</h1>
      <p>Message: {props.messages}</p>
    </div>
  );
}
