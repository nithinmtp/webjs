import React, { Component } from 'react';
import $ from 'jquery';
import './quiz.css';


class Quizitem extends Component {
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
    $.get('http://localhost:3001',function(data){
        this.setState({
          data: data
        })
      }.bind(this))
  }
  render() {
    console.log(this.props);

    console.log(this.state);
    var Dat = this.state.data.map((e)=><li key={e.quizid} ><a href={e.quizlink}><img src={e.quizqnimg} alt="quizzimage" /></a><br/><h5 id="qnfont">{e.quizqn}</h5></li>)
    return (
      <div className="quizzes" >
         <ul>
         {Dat}
         </ul>
      </div>
    );
  }
}

export default Quizitem;

/*$('.quizzes').mouseover(function(){
  var ansres=this.state.data.map((j)=><li key={e.quizid}><a href={e.quizlink}><h4>{e.quizqn}</h4></a></li> )
  {ansres} 
}
*/
