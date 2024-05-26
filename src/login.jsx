import React, { useState } from 'react';
import Board from './Board.jsx'
    export function open(id){
        document.getElementById(id).style.visibility = "visible";
    };
    export function exit(id){
        document.getElementById(id).style.visibility = "hidden";
    }
    export function exitopen(id1,id2){
        document.getElementById(id1).style.visibility = "hidden";
        document.getElementById(id2).style.visibility = "visible";
    }
