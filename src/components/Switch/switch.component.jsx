import React from "react";
import "./switch.component.css"

const Switch = ({ onChange }) => {
  return (
    <label className="inputWrapper">
      <input className="input" type="checkbox" onChange={onChange}></input>
      <span className="slider" />
    </label>
  );
};

export default Switch;
