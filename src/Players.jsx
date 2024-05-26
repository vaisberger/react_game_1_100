import React, { useState } from 'react';
import { exit } from './login.jsx';
import {addRow} from './Board.jsx';
export const isPlaying=[];
export function Players() {
  const [pname, setName] = useState('');
  const [password, setPassword] = useState('');
  const [scores, setScores] = useState([]);
  const [players, setPlayers] = useState(() => {
    // Retrieve users from local storage or initialize with an empty array
    const savedPlayers = localStorage.getItem('players');
    return savedPlayers ? JSON.parse(savedPlayers) : [];
  });
  const addTblRow = () => {
    const row = document.createElement('tr');
    row.innerHTML = '<p>Player: ' + pname + '<br></br>' + 'Scores: ' + scores + '<p>'
    document.getElementById('tbl').appendChild(row);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const Players = JSON.parse(localStorage.getItem('players'));
    let index=-1;
    if(Players!==null){
      index = Players.findIndex(elem => elem.pname === pname);
    }
    if (index !== -1) {                                            /**לבדוק שעובד */
      setScores(Players[index].scores);
    } else {
      const newPlayer = {
        id: players.length + 1,
        pname,
        password,
        scores
      };
      const updatedPlayers = [...players, newPlayer];
      setPlayers(updatedPlayers);
      localStorage.setItem('players', JSON.stringify(updatedPlayers));
    }
    // Clear the input fields
    setName('');
    setPassword('');
    exit('newPlayer');
    addTblRow();
    isPlaying.push( { 
      pname: pname,
      scores:scores,
    });
    addRow({ 
      pname: pname,
      scores:scores,
    });
  }
  return (
    <div>
      <div class="grid-container">
        <div class="grid-item">
          <form id="newPlayer" onSubmit={handleSubmit}>
            <span className="exit" onClick={() => exit('newPlayer')}></span>
            <div class="input-group">
              <label>Name: </label>
              <input type="text" value={pname} onChange={e=>setName(e.target.value)} required />
            </div>
            <div class="input-group">
              <label>Password:</label>
              <input type="text" value={password} onChange={e=>setPassword(e.target.value)} required maxLength="8" />
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
  )
}
export default Players




