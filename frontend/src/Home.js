import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import Suggest from './Components/Suggest';
import Trend from './Components/Trend';
import Quiz from './Components/Quiz';
import Footer from './Components/Footer';
import './Components/quiz.css';
import $ from 'jquery';

class Home extends Component {
  constructor (props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount(){
   $.get('http://localhost:3001',(data)=>{
         this.setState({
           data: data //ar
         })
     })

  }

  render() {
    return <div>
      <div id="fullpage"> 
    <br/><br/><br/>
    { this.state.data.length &&
      <Quiz data={this.state.data} /> }
    <Suggest />
    <Trend/>

    <Link to="/page=2"><img id="next" src="imgs/next.webp" alt="Next page"/></Link>

</div>

<Footer/>

</div>
   
  }
}




export default Home;
