import classes from '../css/TextEditor.module.css'


function KeyBoard(props){
    const English = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const Hebrew = 'אבגדהוזחטיכלמנסעפצקרשת'.split('');
    const Chinese='诶必西弟衣艾付记爱耻挨宅开饿罗饿母恩呕披酷耳艾斯踢忧维大波留埃克斯歪再得'.split('');

    let currentLanguage = English;
    if (props.currentLanguage === 'Hebrew') {
        currentLanguage = Hebrew;
    } else if (props.currentLanguage === 'Chinese') {
        currentLanguage = Chinese;
    }

    const handleColorChange = (event) => {
        props.changeColorTo(event.target.value); 
    };
    const handleFontChange = (event) => {
        props.changeFontTo(event.target.value);
    };

    const handleSizeChange = (event) => {
        props.changeSizeTo(parseInt(event.target.value));
    };
    const handleTextCaseChange = (selectedCase) => {
        props.changeCaseTo(selectedCase);
    };

    return (
        
        <div className={classes.keyboardContainer}>
            <button onClick={props.clearText}>clear</button>
                <div className={classes.keyboardContainer}>
            <input type="color" onChange={handleColorChange} />
            <select onChange={handleFontChange}>
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
           
            </select>
            <input type="number" min="8" max="72" defaultValue="16" onChange={handleSizeChange} />
            <button onClick={() => handleTextCaseChange('upper')}>UPPER CASE</button>
            <button onClick={() => handleTextCaseChange('lower')}>lower case</button>
        </div>
        <div className={classes.keyboard}>
            {currentLanguage.map((letter, index) => (
                <button key={index} onClick={() => props.onTextChanges(letter)}>{letter}</button>
               ))}
        <button className={classes.spaceButton} onClick={() => props.onTextChanges(' ')} >Space</button>
        <button className={classes.deleteButton} onClick={() => props.onTextChanges( '⌫')}>Backspace</button>
        </div>


      
      </div>
    );
}
export default KeyBoard