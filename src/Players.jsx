import React, { useState } from 'react';
import { exit } from './login.jsx'
function Players() {
  const [pname, setName] = useState('');
  const [password, setPassword] = useState('');
  const [score, setScore] = useState(0);
  const [players, setPlayers] = useState(() => {
    // Retrieve users from local storage or initialize with an empty array
    const savedPlayers = localStorage.getItem('players');
    return savedPlayers ? JSON.parse(savedPlayers) : [];
  });
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const addTblRow = () => {
    const row = document.createElement('tr');
    row.innerHTML = '<p>Player: ' + pname + '<br></br>' + 'Score: ' + score + '<p>'
    document.getElementById('tbl').appendChild(row);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const Players = JSON.parse(localStorage.getItem('players'));
    const index = Players.findIndex(u => u.name === pname);
    if (index !== -1) {                                            /**לבדוק שעובד */
      setScore(Players[index].score);
    } else {
      const newPlayer = {
        id: players.length + 1,
        pname,
        password,
        score
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
  }
  return (
    <div>
      <div class="grid-container">
        <div class="grid-item">
          <form id="newPlayer" onSubmit={handleSubmit}>
            <span className="exit" onClick={() => exit('newPlayer')}></span>
            <div class="input-group">
              <label>Name: </label>
              <input type="text" value={pname} onChange={handleNameChange} required />
            </div>
            <div class="input-group">
              <label>Password:</label>
              <input type="text" value={password} onChange={handlePasswordChange} required maxLength="8" />
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




