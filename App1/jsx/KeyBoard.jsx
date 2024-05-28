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
  
    return (
        <div className={classes.keyboardContainer}>
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