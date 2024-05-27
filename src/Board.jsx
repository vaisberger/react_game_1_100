import React, { useState } from 'react';
export function Board({value1,value2}) {
    const [pname, setName] = useState(value1);
    const [scores, setScores] = useState(value2);
    const [steps, setSteps] = useState(0);
    const [num, setNum] = useState(0);
    const[playerturn,setTurn]=useState();
    const Updatestep=()=>{
        setSteps(steps+1);
        is100();
        disableBoard();
      }
    const is100=()=>{
        if(num===100){
        const currentList = [...scores];
        // Add a new item to the list
        currentList.push(steps+' ');
        // Update the state with the new list
        setScores(currentList);}
    
    }
      const disableBoard=()=>{
      }
    const rand = () => {
        const number = Math.floor(Math.random() * (99 - 0 + 1));
        setNum(number);
        Updatestep();
    }
    const plus = () => {
        setNum(num + 1);
        is100();
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
        setNum(num / 2);
        Updatestep();
    }
    return (
        <div>
              <p>Player: {pname}
                <br></br>
                Number: {num}
                <br></br>
               Steps: {steps}
               <br></br>
                <button className="plus1" type="button" onClick={plus}>+1</button>
                <button className="minus1" type="button" onClick={minus}>-1</button>
                <button className="mult2" type="button" onClick={mult}>x2</button>
                <button className="div2" type="button" onClick={div}>/2</button>
                <br></br>
              Scores: {scores}</p>
        </div>

    )
}

export default Board;

