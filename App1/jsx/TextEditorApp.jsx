
import React, { useState } from 'react';
import Header from '../jsx/Header.jsx'
import Screen from './Screen.jsx';
import KeyBoard from './KeyBoard.jsx'
import LanguageMenu from './LanguageMenu.jsx'
import classes from '../css/TextEditor.module.css'
function TextEditorApp(props){
   const [displayedText, setDisplayedText] = useState([]);
    const [Language,setLanguage]=useState('English');
    const [textColor, setTextColor] = useState('black');
    const [font, setFont] = useState('Arial');
    const [fontSize, setFontSize] = useState(16);
    const [textCase, setTextCase] = useState('none');

    const [undoStack, setUndoStack] = useState([]);



    const onTextChanges = (newChar) => {
        setUndoStack(prevStack => [...prevStack, {  color: textColor,font: font, fontSize:fontSize }]);

        if (newChar === '⌫') {
            setDisplayedText(prevText => prevText.slice(0, -1));
        } else {
            setDisplayedText(prevText => [...prevText.slice(), { char: newChar, style: { color: textColor, fontFamily: font, fontSize: `${fontSize}px` } }]);
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

const handleUndo = () => {
  if (undoStack.length > 0) {
      const lastState = undoStack.pop();
      console.log("Last State:", lastState);
    
      const updatedText = displayedText.map((char, index) => {
          if (index === displayedText.length - 1) {
              return { ...char, style: { color: lastState.color, fontFamily: lastState.font, fontSize: `${lastState.fontSize}px` } };
          }
          return char;
      });
      console.log("Updated Text:", updatedText);
    
      setDisplayedText(updatedText);
      setUndoStack([...undoStack]);
  }
};

      





  return (<>
    <button onClick={()=>props.BackToWelcome(false)}> go Back To Welcome</button>
    <Header/>
    <Screen key={displayedText.length} text={displayedText} color={textColor} font={font} fontSize={fontSize} textCase={textCase}/>

    <div className={classes.container}>
    <KeyBoard undo={handleUndo}onTextChanges={onTextChanges}clearText={handleClearText} currentLanguage={Language} changeColorTo={setTextColor} changeFontTo={handleFontChange} changeSizeTo={handleSizeChange}  changeCaseTo={handleTextCaseChange} />
    <LanguageMenu className={classes.languageMenu } onLanguageChanged={setLanguage}/>
    
    </div>
    </>
  );
}

export default TextEditorApp;
