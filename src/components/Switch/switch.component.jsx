import React, { useState } from 'react';
import './switch.component.css';

const Switch = () => {
  let [checked, setChecked] = useState(false);

  function toggle() {
    setChecked((prevState) => !prevState);
  }

  return (
    <label className="inputWrapper">
      <input className="input" type="checkbox" onChange={toggle}></input>
      <span
        className={`slider ${checked ? 'slider-checked' : ''} `}
      />
    </label>
  );
};

export default Switch;



