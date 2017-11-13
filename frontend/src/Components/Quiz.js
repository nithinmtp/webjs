import React, { Component } from 'react';
import $ from 'jquery';
import './quiz.css';


class Quiz extends Component {
  constructor (props){
    super(props);
    this.state = {
      data: this.props.data.slice(0,3)
    }
  }

  shuffle(quizarr) {
    var currentIndex = quizarr.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = quizarr[currentIndex];
      quizarr[currentIndex] = quizarr[randomIndex];
      quizarr[randomIndex] = temporaryValue;
    }
  
    return quizarr;
  }


  componentDidMount(){
    $.get('http://localhost:3001',(data)=>{
      setInterval( ()=> {
        var quizarr = [];
       quizarr = this.shuffle(data);
       quizarr = quizarr.slice(0,3);
        console.log(quizarr);
          this.setState({
            data: quizarr //ar
          })
        }, 5000);
      })
//time interval fn
  }

  render() {
    var Dat = this.state.data.map((e)=><li key={e.quizid}><a href={e.quizlink}><img src ={e.quizqnimg} alt="quizzimage" /></a><br/><h5 id="qnfont">{e.quizqn}</h5></li>)
    return (
      <div className="quizzes" >
           <h4 id="quiztitle">Most Liked Quizzes</h4>
         <ul >
         {Dat}
         </ul>
      </div>
    );
  }
}


export default Quiz;
