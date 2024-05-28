import React, { useState } from 'react';
import Board from './Board.jsx'
import classes from '../App2/index.module.css'
export function Game() {
    const [StoragedPlayers, setStoragedPlayers] = useState(JSON.parse(localStorage.getItem("players")) || []);
    const [CurrentPlayers, setCurrentPlayers] = useState([]);
    const [isGameOn, setIsGameOn] = useState(false);
    const [currentTurn, setCurrentTurn] = useState(0);
    const [showWinners,setShowWinners]=useState(false);

    function handleNewPlayerSubmit(e) {
        e.preventDefault();
        const playerName = e.target.querySelector('input[type="text"]').value;
        const playerPassword = e.target.querySelector('input[type="password"]').value;
        const playerExists = StoragedPlayers.find(player => player.pname === playerName && player.password === playerPassword);
        const playerAlreadyInCurrent = CurrentPlayers.find(player => player.pname === playerName && player.password === playerPassword);
        
        if (!playerAlreadyInCurrent) {
            if (playerExists) 
                setCurrentPlayers([...CurrentPlayers, playerExists]);
            else {
                const newPlayer = { password: playerPassword, pname: playerName, scores: [] };
                localStorage.setItem("players", JSON.stringify([...StoragedPlayers, newPlayer])); 
                setStoragedPlayers([...StoragedPlayers, newPlayer]); 
                setCurrentPlayers([...CurrentPlayers, newPlayer]); 
            }
        } else {
            alert("Player is already in");
        }
    }

    function handleGameEnd() {
        setIsGameOn(false);
        setCurrentPlayers([]); 
    }

    function handleNextTurn() {
        setCurrentTurn(currentTurn=> (currentTurn + 1) % CurrentPlayers.length); 
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
    

    return (
        <>
            <div className={classes.gameContainer}>
            <h1 className={classes.title}>Get to 100</h1>
            <button className={classes.gameButton} onClick={() => setShowWinners(!showWinners)}>show winners</button>
            {showWinners ? (
                <>
                    <h1>The top Players Are:</h1>
                    <ol>
                        {topPlayers(StoragedPlayers).map((player, index) => (
                            <li key={index}>{player.pname} - Average Score: {player.averageScore}</li>
                        ))}
                    </ol>
                </>
            ) : (
                <>
                    {!isGameOn && (
                        <form onSubmit={handleNewPlayerSubmit}>
                            <input
                                type="text"
                                placeholder="Enter player's name"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                required
                            />
                            <button className={classes.gameButton} type="submit">Add Player</button>
                        </form>
                    )}
                    {!isGameOn && CurrentPlayers.length > 0 && (
                        <div>
                            {CurrentPlayers.map((player, index) => (
                                <div key={index}>
                                    <p>Name: {player.pname}, Scores: {player.scores}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    <button className={classes.gameButton} onClick={()=>{setIsGameOn(!isGameOn)}}>start game</button>
                    {isGameOn && (
                        <>
                            {CurrentPlayers.map((player, index) => (
                                <Board player={player} endGame={handleGameEnd} isMyTurn={currentTurn === index} moveTurn={handleNextTurn} />
                            ))}
                        </>
                    )}
                </>
            )}
            </div>
        </>
    );
    
    
}

export default Game;
