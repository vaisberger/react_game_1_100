
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
    const [font, setFont] = useState('Arial');
    const [fontSize, setFontSize] = useState(16);
    const [textCase, setTextCase] = useState('none');



    const onTextChanges = (newChar) => {
        if (newChar === '⌫') {
            setDisplayedText(prevText => prevText.slice(0, -1));
        } else {
        setDisplayedText(displayedText + newChar);
        }
    };
    const handleFontChange = (selectedFont) => {
      setFont(selectedFont);
  };

  const handleSizeChange = (selectedSize) => {
      setFontSize(selectedSize);
  };

  const handleTextCaseChange = (selectedCase) => {
    setTextCase(selectedCase);
};
function handleClearText(){
  setDisplayedText('');

}

  return (<>
    <button onClick={()=>props.BackToWelcome(false)}> go Back To Welcome</button>
    <Header/>
    <Screen text={displayedText}  color={textColor}  font={font} fontSize={fontSize} textCase={textCase}/>
    <div className={classes.container}>
    <KeyBoard onTextChanges={onTextChanges}clearText={handleClearText} currentLanguage={Language} changeColorTo={setTextColor} changeFontTo={handleFontChange} changeSizeTo={handleSizeChange}  changeCaseTo={handleTextCaseChange} />
    <LanguageMenu className={classes.languageMenu } onLanguageChanged={setLanguage}/>
    
    </div>
    </>
  );
}

export default TextEditorApp;
