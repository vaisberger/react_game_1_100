import './App.css'
import { open,exitopen } from './login.jsx'
import Players from './Players.jsx'
import {Board} from './Board.jsx'
function App() {
const onPlayerclick=(index)=>{
  console.log(index)
}
  return (
    <div id="main">
      <h1>Get to 100</h1>
      <div id="addplayer"><button type="button" onClick={() => open('newPlayer')}>Add Player</button></div>
        <Players/>
    </div>
  );
}
export default App
