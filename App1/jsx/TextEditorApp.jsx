
import React, { useState } from 'react';
import Header from '../jsx/Header.jsx'
import Screen from './Screen.jsx';
import KeyBoard from './KeyBoard.jsx'
import LanguageMenu from './LanguageMenu.jsx'
import classes from '../css/TextEditor.module.css'
function TextEditorApp(props){
    const [displayedText,setDisplayedText]=useState('');
    const [Language,setLanguage]=useState('English');
    const [textColor, setTextColor] = useState('black');



    const onTextChanges = (newChar) => {
        if (newChar === '⌫') {
            setDisplayedText(prevText => prevText.slice(0, -1));
        } else {
        setDisplayedText(displayedText + newChar);
        }
    };
    const handleColorChange = (event) => {
      setTextColor(event.target.value);
  };




  return (<>
    <button onClick={()=>props.BackToWelcome(false)}> go Back To Welcome</button>
    <Header/>
    <Screen text={displayedText}  color={textColor} />
    <div className={classes.container}>
    <KeyBoard onTextChanges={onTextChanges} currentLanguage={Language}/>
    <LanguageMenu className={classes.languageMenu } onLanguageChanged={setLanguage}/>
    
    </div>
    </>
  );
}

export default TextEditorApp;
