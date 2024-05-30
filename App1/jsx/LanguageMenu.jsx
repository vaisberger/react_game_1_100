import classes from '../css/TextEditor.module.css'
import React, { useState } from 'react';
function LanguageMenu(props){
    const [isOpen, setIsOpen] = useState(false);
    return (<>
        <div className={classes.languageMenu} onClick={()=>setIsOpen(!isOpen)}>
            <button className={classes.languageButton} >Change Language</button>
            {isOpen && (
                <div className={classes.menuContent}>
                    <button className={classes.languageButton} onClick={()=>props.onLanguageChanged('English')}>English</button>
                    <button className={classes.languageButton} onClick={()=>props.onLanguageChanged('Hebrew')}>Hebrew</button>
                    <button className={classes.languageButton} onClick={()=>props.onLanguageChanged('Chinese')}>Chinese</button>
                    
                    
                </div>
            )}
        </div>
    </>)
}
export default LanguageMenu