import React, { useState } from 'react';
import { exit, exitopen } from './login.jsx';
import Board from './Board.jsx';

export function Players() {
  const [pname, setName] = useState('');
  const [scores, setScores] = useState([]);
  const [playerLst, setList] = useState([]);
  const [Ply, setLocalItems] = useState(JSON.parse(localStorage.getItem("players")) || []);
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
    row.innerHTML = '<p>Player: ' + pname  + ' Scores: ' + scores + '<p>'
    document.getElementById('tbl').appendChild(row);
  }

  //submits the new player
  const handleSubmit = (event) => {
    event.preventDefault();
    let index = -1;
    if (Ply !== null) {
      index = Ply.findIndex(elem => elem.pname === pname);
    }
    if (index !== -1) {                                            /**לבדוק שעובד */
      setScores(Ply[index].scores);
    } else {
      const newPlayer = {
        id: Ply.length + 1,
        pname,
        scores
      };
      const updatedPlayers = [...players, newPlayer];
      setPlayers(updatedPlayers);
      localStorage.setItem('players', JSON.stringify(updatedPlayers));
    }
    // Clear the input fields
    setName('');
    setScores([])
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
    document.getElementById('addplayer').style.display="none";

}
const rand=()=>{
  return(Math. floor(Math. random() * (99 - 0 + 1)))
}
const avr=(p)=>{

}
  return (
    <div>
      <div id="loginplayers">
        <button className="start" type='button' onClick={() => handelstart('loginplayers', 'game')}>Start game </button>
        <div className="grid-container">
          <div className="grid-item">
            <form id="newPlayer" onSubmit={handleSubmit}>
              <span className="exit" onClick={() => exit('newPlayer')}></span>
              <div className="input-group">
                <label>Name: </label>
                <input type="text" value={pname} onChange={e => setName(e.target.value)} required />
              </div>
              <div className="grid-item" >
                <button className="addbtn" type="submit">Add</button>
              </div>
            </form>
          </div>
        </div>
        <table id='tbl'>
        </table>
      </div>
      <div id="game">
        <table>
          <tbody>
          {playerLst.map((player) => (
            avr(player)?
            <tr>
              <p>Player: +{player.pname}+Scores:  + {player.scores}</p>
            </tr>:null
          ))}
          </tbody>
        </table>
        <table id="board">          
        <tbody>
          {playerLst.map((player) => (
            <tr>
              <Board id={player.index} value1={player.pname} value2={player.scores} value3={rand}/>
            </tr>
          ))}
        </tbody></table>
      </div>
    </div>
  )
}
export default Players




