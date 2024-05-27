import React, { useState } from 'react';
import { exit, exitopen } from './login.jsx';
export function Board({ value1, value2, value3 }) {
    const [pname, setName] = useState(value1);
    const [scores, setScores] = useState(value2);
    const [steps, setSteps] = useState(0);
    const [num, setNum] = useState(value3);
    const Updatestep = () => {
        setSteps(steps + 1);
        is100();
        disableBoard();
    }
    const saveLocalScore = () => {
        let plrs = JSON.parse(localStorage.getItem('players'));
        const index = plrs.findIndex(elem => elem.pname === pname);
        plrs[index].scores = scores;
        localStorage.setItem('players', JSON.stringify(plrs));
    }
    const is100 = () => {
        if (num === 100) {
            const currentList = [...scores];
            // Add a new item to the list
            currentList.push(steps + ' ');
            // Update the state with the new list
            setScores(currentList);
            exitopen(pname+'1',pname)
        }
        saveLocalScore();
    }
    const disableBoard = () => {
    }
    const rand = () => {
        const number = Math.floor(Math.random() * (99 - 0 + 1));
        setNum(number);
        Updatestep();
    }
    const plus = () => {
        setNum(num + 1);
        Updatestep();
    }
    const minus = () => {
        setNum(num - 1);
        Updatestep();
    }
    const mult = () => {
        setNum(num * 2);
        Updatestep();
    }
    const div = () => {
        let n = Math.floor(num / 2);
        setNum(n);
        Updatestep();
    }
    const out =()=>{
      exit(pname+'2');
    }
    const newGame =()=>{
       setSteps(0);
       setNum(Math. floor(Math. random() * (99 - 0 + 1)));
       exitopen(pname,pname+'1');
    }
    return (
        <div className="box" id={pname+'2'}>
            <p>Player: {pname}
                <div id={pname+'1'}>
                    Number: {num}
                    <br></br>
                    Steps: {steps}
                    <br></br>
                    <button className="plus1" type="button" onClick={plus}>+1</button>
                    <button className="minus1" type="button" onClick={minus}>-1</button>
                    <button className="mult2" type="button" onClick={mult}>x2</button>
                    <button className="div2" type="button" onClick={div}>/2</button>
                    <br></br>
                </div>
                <div id={pname} className="exitorgame">
                    <button className="Out" type="button" onClick={out}>Exit</button>
                    <button className="newGame" type="button" onClick={newGame}>New Game</button>
                </div>
                Scores: {scores}</p>
        </div>

    )
}

export default Board;

