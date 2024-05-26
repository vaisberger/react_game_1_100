import { isPlaying } from './Players.jsx'
import React, { useState } from 'react';
export function Board() {
    return (
        <div>
           <table id='table'></table>
        </div>

    )
}
export function addRow (obj){
    const row = document.createElement('tr');
    row.innerHTML = '<p>Player: ' + obj.pname + '<br></br>' + 'Scores: ' + obj.scores + '<p>'
    document.getElementById('table').appendChild(row);
  }
export default Board;
