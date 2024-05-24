import React, { useState } from 'react';
    export function open(id){
        document.getElementById(id).style.visibility = "visible";
    };
    export function exit(id){
        document.getElementById(id).style.visibility = "hidden";
    }
