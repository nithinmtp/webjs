import React, { Component } from 'react';
import Headdemo from './Components/Headdemo';



class Topics extends Component { 
  
  
  render(){ 
    var user={
      name:"nithin",
      hobbies:["read","sports"]
    };

    
    return (
      <div>    
      <br/><br/><br/>
        <h1>hello</h1>
        <Headdemo name={"monu"} age={27} user={user}/>
        
       
      </div>

          
      );
    }
  }



export default Topics;
