import React from "react";
import "../styles/styles";

const FormInput = (props) => {
  return (
    <input
      name={props.name}
      type={props.type}
      className="inputText"
      placeholder={props.placeholder}
    />
  );
};

export default FormInput;
