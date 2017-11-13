import React, { Component } from 'react';
import $ from 'jquery';
import './quiz.css';
class Test extends Component {
    constructor (props){
      super(props);
      this.state = {
        data: []
      }
    }
  
    
  
    componentDidMount(){
      $.get('http://localhost:3001/users/quizpage',function(data){
          console.log("Test", data)
          this.setState({
            data: data
          })
        }.bind(this))
    }
    render() {
      var Dat = this.state.data.map((e)=><li key={e.quizid} ><a href={e.quizlink}><img src={e.quizimg} alt="quizzimage" /></a><br/><h5 id="qnfont">{e.quizqn}</h5></li>)
      return (
        <div className="quizzes" id="quizzlink">
          <h4 id="quiztitle">Recommended For You</h4>
           <ul>
           {Dat}
           </ul>
        </div>
      );
    }
  }
  
  export default Test;
  