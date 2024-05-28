import classes from './App2/Style.module.css'
import React, { useState } from 'react';
import TextEditorApp from './App1/jsx/TextEditorApp.jsx'
import Game from './App2/Game.jsx'
function WelcomePage() {
   const  [TextEditorShow,SetTextEditorShow]=useState(false);
   const [GameShow, setGameShow]=useState(false);

    function handleTextClick(value){
        SetTextEditorShow(value);
    }
    function handleGameClick(value){
      setGameShow(value);
  }

  return (<>
 
   {TextEditorShow ? <TextEditorApp BackToWelcome={handleTextClick} />:GameShow? <Game/>: <>
   <div className={classes.WelcomeContainer}><h1 className={classes.title}>Welcome!</h1>
      <button className={classes.WelcomeB} onClick={()=>handleTextClick(true)}>Text Editor</button>
      <button className={classes.WelcomeB} onClick={()=>handleGameClick(true)}>Game  </button></div>
      </>
      }

  
   
    </>
  );
}

export default WelcomePage;
