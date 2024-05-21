import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return(
 <div>
  <h1>Get to 100</h1>
  <button class="add">Add player</button>
  <button class="start">Start game</button>
 </div>
  );
}
/* users and their boards*/ 
const User=(user)=>{
  return(  
  <div>
    <h1>{user.name}</h1>
    <h1>{user.score}</h1>
  </div>)
}
export default App
