import React, { useState } from 'react';
import { exit } from './login.jsx'
function Players() {
    const [pname, setName] = useState('');
    const [password, setPassword] = useState('');
    const [count, setCount] = useState(0);
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
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const newPlayer = {
            id: players.length + 1,
            pname,
            password,
        };
        const updatedPlayers = [...players, newPlayer];
        setPlayers(updatedPlayers);
        localStorage.setItem('players', JSON.stringify(updatedUsers));
    
        // Clear the input fields
        setName('');
        setPassword('');
    }
    return(
        <div class="grid-container">
        <div class="grid-item">
          <form id="newPlayer" onSubmit={handleSubmit}>
            <span class="exit" onClick={() => exit('newPlayer')}></span>
            <div class="input-group">
              <label>Name: </label>
              <input type="text" value={pname} onChange={handleNameChange} required />
            </div>
            <div class="input-group">
              <label>Password:</label>
              <input type="text" value={password} onChange={handlePasswordChange} required maxlength="8" />
            </div>
            <div class="grid-item" >
              <button class="addbtn" type="submit">Add</button>
            </div>
            <p>If you are not registered, <button class="clickhere" type="button" onclick="">click here</button> to
              register.</p>
          </form>
        </div>
      </div>
    )
} 
export default Players




