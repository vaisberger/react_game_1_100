import './App.css'
import { open,exitopen } from './login.jsx'
import Players from './Players.jsx'
import Board from './Board.jsx'
function App() {

  return (
    <div id="main">
      <h1>Get to 100</h1>
      <div id="loginplayers">
        <div class="addplayer"><button type="button" onClick={() => open('newPlayer')}>Add Player</button></div>
        <button class="start" type='button' onClick={() => exitopen('loginplayers', 'game')}>Start game </button>
        <Players />
      </div>
      <div id="game">
        <Board />
      </div>
    </div>
  );
}
export default App
