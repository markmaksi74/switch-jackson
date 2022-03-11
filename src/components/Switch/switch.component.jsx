import React, { useState } from 'react';
import './switch.component.css';

const Switch = () => {
  let [checked, setChecked] = useState(false);

  return (
    <label className="inputWrapper">
      <input hidden className="input" type="checkbox" onChange={() => setChecked(!checked)}></input>
      <span className={`slider ${checked ? 'slider-checked' : ''} `} />
    </label>
  );
};

export default Switch;
