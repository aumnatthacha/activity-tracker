/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react'
import Workout from './pages/Workout';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h2>Workout Tracker</h2>
      <Workout />
    </div>
  );
}

export default App
