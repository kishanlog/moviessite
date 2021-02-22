import React from 'react';
import './index.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const Cards =(props)=>{
    return(
        <>
       
        {/* <Button aria-controls="simple-menu" color="secondary"  >
        Open Menu
      </Button> */}
      
        <div className="cards_list">
                <div className="card">
                    <img src={props.imgsrc} alt="myPIC" className="card_image" />
                    
                    <h3 className="card_title title-white"  >{props.title}</h3>
                   <h3><a href={props.Links} ></a></h3> 
                    {/* <span >{props.sname}</span> */}
                    <Button variant="contained" color="secondary">Watch Now{props.Links}</Button>
                </div>
                
                   
        </div>
        </>
    )
}
export default Cards;