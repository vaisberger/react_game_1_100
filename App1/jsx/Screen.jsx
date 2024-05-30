import React from 'react';
import classes from '../css/TextEditor.module.css';

function Screen(props) {
    return (
        <div className={classes.screenContainer}>
            {props.text.map((charObj, index) => (
                <span key={index} style={charObj.style}>{charObj.char}</span>
            ))}
        </div>
    );
}

export default Screen;
