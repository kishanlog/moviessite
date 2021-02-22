import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import './index.css';
import Container from '@material-ui/core/Container';
import Sdata from './Sdata';




function ncard(val){
       return(
    <Cards imgsrc={val.imgscr}
           sname={val.sname}
           title={val.title} 
           Links={val.Links} />
       )
}

ReactDOM.render(
<>
      

     <Container maxWidth="sm">
     
     
     
      </Container>
    <p className="header" >
    
   {Sdata.map(ncard)};
    </p>
</>
       
   , document.getElementById('root')
    );