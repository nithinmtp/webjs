import React, { Component } from 'react';
import $ from 'jquery';
import './quiz.css';


class Trend extends Component {
  constructor (props){
    super(props);
    this.getdata = this.getdata.bind(this);
    this.state = {
      data: []
    }
  }

  getdata(){

  }

  componentDidMount(){
    $.get('http://localhost:3001/trend/home',function(data){
        console.log("Trend", data)
        this.setState({
          data: data
        })
      }.bind(this))
  }
  render() {
    var Dat = this.state.data.map((e)=><li key={e.quizid} ><a href={e.quizlink}><img src={e.quizqnimg} alt="quizzimage" /></a><br/><h5 id="qnfont">{e.quizqn}</h5></li>)
    return (
      <div className="quizzes" id="quizzlink">
        <h4 id="quiztitle">Latest Quizzes</h4>
         <ul>
         {Dat}
         </ul>
      </div>
    );
  }
}

export default Trend;
