import React from 'react';
import classes from '../css/TextEditor.module.css';

function Screen(props){
    let textToDisplay = props.text;

    if (props.textCase === 'upper') {
        textToDisplay = props.text.toUpperCase();
    } else if (props.textCase === 'lower') {
        textToDisplay = props.text.toLowerCase();
    }
    
    const style = {
        color: props.color,
        fontFamily: props.font,
        fontSize: `${props.fontSize}px`
    };

    return (
        <div className={classes.screenContainer} style={style}>
            {textToDisplay}
        </div>
    );
}

export default Screen;
