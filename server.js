const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());




function divide(p1,p2) {
    if(p2 != 0 ){
        return p1/p2;
    }else{
        return null;
    }
}


function multiply(p1,p2)
{
    return p1*p2;

}


function subtract(p1, p2) {
    return p1-p2;
}


function addition (p1, p2)
{
    return p1 + p2;
}

