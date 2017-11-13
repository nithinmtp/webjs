import React, { Component } from 'react';


class Headdemo extends Component { 
    constructor(props){
        super()
        this.state={
            age:props.age,
            status:0

        };
    }
    onMakeOlder(){
        this.setState({
            age:this.state.age + 3

        });
    }
    
  render(){
      return(
          <div>
           <p>Your name is {this.props.name},your age is {this.state.age}</p>
           <p>Status:{this.state.status}</p>
           <p>User Object => Name:{this.props.name}</p>
           <h4>Hobbies</h4>
               <ul>
                   {this.props.user.hobbies.map((hobby)=><li>{hobby}</li>)}        
               </ul>
            <hr/>
            <button onClick={this.onMakeOlder.bind(this)}>Make me older!</button>

        
          </div>    
      );
  }
  }



export default Headdemo;
