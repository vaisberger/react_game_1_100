import React, { useState } from 'react';
import Board from './Board.jsx'
import classes from '../App2/index.module.css'
export function Game() {
    const [StoragedPlayers, setStoragedPlayers] = useState(JSON.parse(localStorage.getItem("players")) || []);
    const [CurrentPlayers, setCurrentPlayers] = useState([]);
    const [isGameOn, setIsGameOn] = useState(false);
    const [currentTurn, setCurrentTurn] = useState(0);
    const [showWinners, setShowWinners] = useState(false);

    function handleNewPlayerSubmit(e) {
        e.preventDefault();
        const playerName = e.target.querySelector('input[type="text"]').value;
        const playerExists = StoragedPlayers.find(player => player.pname === playerName);
        const playerAlreadyInCurrent = CurrentPlayers.find(player => player.pname === playerName);

        if (!playerAlreadyInCurrent) {
            if (playerExists)
                setCurrentPlayers([...CurrentPlayers, playerExists]);
            else {
                const newPlayer = { pname: playerName, scores: [], in: true };
                localStorage.setItem("players", JSON.stringify([...StoragedPlayers, newPlayer]));
                setStoragedPlayers([...StoragedPlayers, newPlayer]);
                setCurrentPlayers([...CurrentPlayers, newPlayer]);
            }
        } else {
            alert("Player is already in");
        }
        exit('newPlayer');
    }
    
     function handleremove(pname){
        let index = CurrentPlayers.findIndex(elem => elem.pname === pname);
       CurrentPlayers[index].in=false;
       //handleGameEnd();
     }

    function handleGameEnd() {
        if(CurrentPlayers.length===0){
            setIsGameOn(false);
            setCurrentPlayers([]);
        }
    }

    function handleNextTurn() {

        if(CurrentPlayers[(currentTurn + 1) % CurrentPlayers.length].in===false){
            setCurrentTurn(currentTurn => (currentTurn + 2) % CurrentPlayers.length);
        }else{
        setCurrentTurn(currentTurn => (currentTurn + 1) % CurrentPlayers.length);}
    }



    function calculateAverage(array) {
        if (array.length === 0) return 0;
        const sum = array.reduce((acc, val) => acc + val, 0);
        return sum / array.length;
    }
    function topPlayers(players) {
        const playersWithAverage = players.map(player => ({
            ...player,
            averageScore: calculateAverage(player.scores)
        }));

        playersWithAverage.sort((a, b) => a.averageScore - b.averageScore);
        return playersWithAverage.slice(0, 3);
    }
    function open(id) {
        document.getElementById(id).style.display = "block";
    }
    function exit(id) {
        document.getElementById(id).style.display = "none";
    }
    function startgame(){
        setIsGameOn(!isGameOn);
        exit('main');
    }
    return (
        < >
            <div className={classes.gameContainer}>
                <h1 className={classes.title}>Get to 100</h1>
                <button className={classes.gameButton} onClick={() => setShowWinners(!showWinners)}>show winners</button>
                <div id='main'>
                <button className={classes.gameButton} onClick={startgame}>start game</button>
                <button className={classes.gameButton} onClick={() => open('newPlayer')}>Add Player</button>
                </div>
                {showWinners ? (
                    <>
                    <div className={classes.winners}>
                        <h1>The top Players Are:</h1>
                        <ol>
                            {topPlayers(StoragedPlayers).map((player, index) => (
                                <li key={index}>{player.pname} - Average Score: {player.averageScore}</li>
                            ))}
                        </ol>
                        </div>
                    </>
                ) : (
                    <>
                        {!isGameOn && (
                            <div className={classes.container}>
                                <div className={classes.item}>
                                    <form id="newPlayer" className={classes.newPlayer} onSubmit={handleNewPlayerSubmit}>
                                        <span className={classes.exit} onClick={() => exit('newPlayer')}></span>
                                        <input
                                            type="text"
                                            placeholder="Enter player's name"
                                            required
                                        />
                                        <div className={classes.item}>
                                            <button className={classes.gameButton} type="submit">Add</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                        {!isGameOn && CurrentPlayers.length > 0 && (
                            <table className={classes.tbl}>
                                {CurrentPlayers.map((player, index) => (
                                    <tr className={classes.trp} key={index}>
                                        <p className={classes.p}>Name: {player.pname} Scores: {player.scores}</p>
                                    </tr>
                                ))}
                            </table>
                        )}

                        {isGameOn && (
                            <>
                                <table className={classes.board}>
                                    <tr>
                                        {CurrentPlayers.map((player, index) => (
                                            <Board player={player} removeMe={()=>handleremove(player.pname)}  isMyTurn={currentTurn === index} moveTurn={handleNextTurn} />
                                        ))}
                                    </tr>
                                </table>
                            </>
                        )}
                    </>
                )}
            </div>
        </>
    );


}

export default Game;
