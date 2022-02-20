import React, { useState } from 'react';
import './App.css';
import Switch from './components/switch.component.jsx/switch.component';

const App = () => {
  const [checked, setChecked] = useState(() => {
    // this function runs once after the initial render
    return false;
  });

  return (
    <div className="App">
      <Switch onChange={(e) => setChecked(e.target.checked)} />
    </div>
  );
};

export default App;
