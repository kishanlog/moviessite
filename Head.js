import React from 'react';

let currentDate = new Date();
    currentDate = currentDate.getHours();
let greeting ="";
const cssStyle={};

if(currentDate >= 1 &&  currentDate <12){
    greeting ="good morning";
    cssStyle.color="green";
}else if(currentDate>= 12 && currentDate < 20){
    greeting="Good afternoon";
    cssStyle.color="#006699";
    
}else{
    greeting="Good night";
    cssStyle.color="cream";
}

function Head(){
    return<span style={cssStyle}>Watch All Marvel Movies And Web Series Online </span>;
}

function Gm(){
    return <p>Hello!: <span style={cssStyle}>{greeting}</span></p>;
}

export {Head,Gm};