import './App.css'
import { open } from './login.jsx'
import Players from './Players.jsx'
function App() {
    return (
      <div>
        <h1>Get to 100</h1>
        <div class="addplayer"><button type="button" onClick={() => open('newPlayer')}>Add Player</button></div>
        <button class="start">Start game </button>
        <Players/>
      </div>
    );
  }
export default App
