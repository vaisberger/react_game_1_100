import React, { useState } from 'react';
import { exit, exitopen } from './login.jsx';
import Board from './Board.jsx';

export function Players() {
  const [pname, setName] = useState('');
  const [scores, setScores] = useState([]);
  const [playerLst, setList] = useState([]);
  const [players, setPlayers] = useState(() => {
    // Retrieve users from local storage or initialize with an empty array
    const savedPlayers = localStorage.getItem('players');
    return savedPlayers ? JSON.parse(savedPlayers) : [];
  });

  //shows the new added player
  const addTblRow = () => {
    document.getElementById('tbl').style.visibility = "visible";
    const row = document.createElement('tr');
    row.id = "trp"
    row.innerHTML = '<p>Player: ' + pname + '<br></br>' + 'Scores: ' + scores + '<p>'
    document.getElementById('tbl').appendChild(row);
  }

  //submits the new player
  const handleSubmit = (event) => {
    event.preventDefault();
    const Players = JSON.parse(localStorage.getItem('players'));
    let index = -1;
    if (Players !== null) {
      index = Players.findIndex(elem => elem.pname === pname);
    }
    if (index !== -1) {                                            /**לבדוק שעובד */
      setScores(Players[index].scores);
    } else {
      const newPlayer = {
        id: players.length + 1,
        pname,
        scores
      };
      const updatedPlayers = [...players, newPlayer];
      setPlayers(updatedPlayers);
      localStorage.setItem('players', JSON.stringify(updatedPlayers));
    }
    // Clear the input fields
    setName('');
    exit('newPlayer');
    addTblRow();

    const currentList = [...playerLst];
    // Add a new item to the list
    currentList.push({
      index: playerLst.length + 1,
      pname: pname,
      scores: scores,
    });
    // Update the state with the new list
    setList(currentList);
  }
const handelstart=(id1,id2)=>{
    exitopen(id1,id2);
}

  return (
    <div>
      <div id="loginplayers">
        <button class="start" type='button' onClick={() => handelstart('loginplayers', 'game')}>Start game </button>
        <div class="grid-container">
          <div class="grid-item">
            <form id="newPlayer" onSubmit={handleSubmit}>
              <span className="exit" onClick={() => exit('newPlayer')}></span>
              <div class="input-group">
                <label>Name: </label>
                <input type="text" value={pname} onChange={e => setName(e.target.value)} required />
              </div>
              <div class="grid-item" >
                <button class="addbtn" type="submit">Add</button>
              </div>
              <p>If you are not registered, <button class="clickhere" type="button" onClick="">click here</button> to
                register.</p>
            </form>
          </div>
        </div>
        <table id='tbl'>
        </table>
      </div>
      <div id="game">
        <table id="board">          
        <tbody>
          {playerLst.map((player) => (
            <tr>
              <Board id={player.index} value1={player.pname} value2={player.scores}/>
            </tr>
          ))}
        </tbody></table>
      </div>
    </div>
  )
}
export default Players




