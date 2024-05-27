import React from 'react'
import './App.css';
import FetchAPI from './Components/FetchAPI'


function App() {
  return (
    <div className="App">
      <h2>Beer List</h2>
      <FetchAPI/>
    </div>
  )
}

export default App;