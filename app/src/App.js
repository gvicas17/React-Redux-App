import React from 'react'
import './App.css';

import FoodData from './components/FoodData'

function App() {
  return (
    <div className="App">
      <h1>Random Food Pics</h1>
      <button onClick = {() => {window.location.reload()}}>New Pictures</button>
       <FoodData/>
    </div>
  );
}

export default App;
