import React, { useState } from 'react';
import Board from './Board.jsx'
    export function open(id){
        document.getElementById(id).style.display = "block";
    };
    export function exit(id){
        document.getElementById(id).style.display = "none";
    }
    export function exitopen(id1,id2){
        document.getElementById(id1).style.display = "none";
        document.getElementById(id2).style.display = "block";
        document.getElementById('addplayer').style.display="none";
    }
