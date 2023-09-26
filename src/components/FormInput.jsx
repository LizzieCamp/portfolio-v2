import React from "react";
import "../styles/styles";

export default (props) => {
  return (
    <input
    name={props.name}
      type={props.type}
      className="inputText"
      placeholder={props.placeholder}
    />
  );
};
