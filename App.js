import React,{Component} from 'react';
import {Avenge,Thor} from "./Myfile/Movie";
import Hooks from './Myfile/Hooks';

const favmovie= "avengers";
const favm = () =>{
  if (favmovie==="avengers"){
    return <Avenge />
  }
  else{
    return<Thor/>
  }
};

class App extends Component{
  render(){
    const btnStyle={
      color: "green",
      backgroundColor:"cream",
  }
    return(
      <>
      <button style={btnStyle} >OK</button>
      </>
      )
  }
}
const Apps=() =>{
  return(
  <>
  <h4>there is 3 list of movie</h4>
  {(favmovie==="avengers") ? <Avenge /> : <Thor/>  }
  </>
  );
}
const Hook=()=>{
  return(
    <>
    <h1><Hooks></Hooks></h1>
    </>
  )
}

export  {App,Apps,Hook};