import React, { useState } from 'react';

export function Board(props) {
    const [randomNum,  setRandomeNum] = useState(Math.floor(Math.random() * 100) + 1);
    const [stepsCount,setStepsCount]=useState(0);

    const plus = () => {
        randomNum + 1 === 100 ? handle100() : (
            setRandomeNum(randomNum + 1),
            setStepsCount(stepsCount + 1),
            props.moveTurn()
        
        );
    };
    
    const minus = () => {
        randomNum - 1 === 100 ? handle100() : (
            setRandomeNum(randomNum - 1),
            setStepsCount(stepsCount + 1),
            props.moveTurn()
        );
    }
    const mult = () => {
        randomNum *2 === 100 ? handle100() : (
            setRandomeNum(randomNum *2),
            setStepsCount(stepsCount + 1),
            props.moveTurn()
        );
    }
    const div = () => {
        Math.floor(randomNum / 2) === 100 ? handle100() : (
            setRandomeNum(Math.floor(randomNum / 2)),
            setStepsCount(stepsCount + 1),
            props.moveTurn()
        );

    }


    const handle100= () => {
      
       //finish the game: 1. update this player data
       //                 2. got back to login page
       let Allplayers=JSON.parse(localStorage.getItem("players"));
       const playerIndex =  Allplayers.findIndex(p => p.pname === props.player.pname && p.password === props.player.password);
       Allplayers[playerIndex].scores.push(stepsCount);
       localStorage.setItem("players", JSON.stringify( Allplayers)); 


       props.endGame();

    }
 
    return (
        <div>
            <p>Player: {props.player.pname}
                <div>
                    start Number: {randomNum}
                    <br></br>
                    Steps: {stepsCount}
                    <br></br>
                    <button onClick={plus} disabled={!props.isMyTurn}>+1</button>
                    <button onClick={minus}disabled={!props.isMyTurn}>-1</button>
                    <button onClick={mult}disabled={!props.isMyTurn}>x2</button>
                    <button onClick={div} disabled={!props.isMyTurn}>/2</button>
                    <br></br>

                </div>
                {props.player.pname}'s scores are {props.player.scores}
</p>
        </div>

    )
}

export default Board;

