import React, { useState } from 'react';
import './App.css';
import Editor from './components/Editor';

function App() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <h1>Kalvium Note</h1>
      <Editor value={value} onChange={handleChange} />
    </div>
  );
}

export default App;