import React from 'react';
import './Header.css';
import { BrowserRouter as Router,Link,Route } from 'react-router-dom';
import Home from '../Home'
import Quizpage from '../Quizpage'







const Headercls= () => {
    return (
      <Router> 
        <div className="headercss" id="header">
        <Link to="/home"><img id="logo" src="imgs/mewlogo.jpg" alt="meawwlogo"/><h3 id="logoname">MEAWW</h3></Link>
          
          
          <nav>
          <ul id="headerword">
          
            <li><Link to="/">Home</Link></li>
            <li><a href="https://en.meaww.com/support">Contact</a></li>
            <li><a href="https://en.meaww.com/about-us">About Us</a></li>
           

          </ul>
          </nav>
          <Route exact path ='/' component={Home}/>
          <Route exact path ='/page=2' component={Quizpage}/>
       
        </div>
      </Router>
    );
  }


export default Headercls;