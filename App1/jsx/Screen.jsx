import React from 'react';
import classes from '../css/TextEditor.module.css';

function Screen(props){
    const style = {
        color: props.color
    };

    return (
        <div className={classes.screenContainer} style={style}>
            {props.text}
        </div>
    );
}

export default Screen;
