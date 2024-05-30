import React, { useState } from 'react';
import classes from '../App2/index.module.css'
export function Board(props) {
    const [randomNum, setRandomeNum] = useState(Math.floor(Math.random() * 100) + 1);
    const [stepsCount, setStepsCount] = useState(0);
    const[score,setScorelst]=useState(props.player.scores);
    const plus = () => {
        props.moveTurn();
        randomNum + 1 === 100 ? handle100() : (
            setRandomeNum(randomNum + 1),
            setStepsCount(stepsCount + 1)

        );
    };

    const minus = () => {
        props.moveTurn();
        randomNum - 1 === 100 ? handle100() : (
            setRandomeNum(randomNum - 1),
            setStepsCount(stepsCount + 1)
        );
    }
    const mult = () => {
        props.moveTurn();
        randomNum * 2 === 100 ? handle100() : (
            setRandomeNum(randomNum * 2),
            setStepsCount(stepsCount + 1)
        );
    }
    const div = () => {
        props.moveTurn();
        Math.floor(randomNum / 2) === 100 ? handle100() : (
            setRandomeNum(Math.floor(randomNum / 2)),
            setStepsCount(stepsCount + 1)
        );

    }


    const handle100 = () => {

        //finish the game: 1. update this player data
        //                 2. got back to login page
        let Allplayers = JSON.parse(localStorage.getItem("players"));
        const playerIndex = Allplayers.findIndex(p => p.pname === props.player.pname && p.password === props.player.password);
        Allplayers[playerIndex].scores.push(stepsCount);
        localStorage.setItem("players", JSON.stringify(Allplayers));
        const currentList = [...score];
        // Add a new item to the list
        currentList.push(stepsCount + ' ');
        // Update the state with the new list
        setScorelst(currentList);
       // props.endGame();
       exitopen(props.player.pname+'1',props.player.pname+'2');
    }
    function out() {
        document.getElementById(props.player.pname+'3').style.display = "none";
        props.removeMe();
    } 
        
    function exitopen(id1,id2){
        document.getElementById(id1).style.display = "none";
        document.getElementById(id2).style.display = "block";
    }
    const newGame =()=>{
       setStepsCount(0);
       setRandomeNum(Math. floor(Math. random() * (99 - 0 + 1)));
       exitopen(props.player.pname+'2',props.player.pname+'1');
    }
    return (
        <div id={props.player.pname+'3'} className={classes.box}>
            <p>Player: {props.player.pname}
                <div id={props.player.pname+'1'}>
                    Number: {randomNum}
                    <br></br>
                    Steps: {stepsCount}
                    <br></br>
                    <button className={classes.gameButton} onClick={plus} disabled={!props.isMyTurn}>+1</button>
                    <button className={classes.gameButton} onClick={minus} disabled={!props.isMyTurn}>-1</button>
                    <button className={classes.gameButton} onClick={mult} disabled={!props.isMyTurn}>x2</button>
                    <button className={classes.gameButton} onClick={div} disabled={!props.isMyTurn}>/2</button>
                    <br></br>

                </div>                
                <div id={props.player.pname+'2'} className={classes.menu}>
                    <button className={classes.gameButton} onClick={out}>Exit</button>
                    <br></br>
                    <button className={classes.gameButton} id="newGame" onClick={newGame}>New Game</button>
                </div>
                {props.player.pname}'s scores are {score}
            </p>
        </div>

    )
}

export default Board;

