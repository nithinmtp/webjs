import React, { Component } from 'react';
import './Footer.css';


class Footcls extends Component {
  render() {
    return (
   
      <div className="Footercss">
<footer>
 <ul>
 <li><a href="/ ">  <img src="artimg/home-icon.png" alt="home-icon"/><br/><h4 id="foot-words">Home</h4></a></li>
 <li><a href="https://en.meaww.com/delete"> <img src="artimg/delete.png" alt="delete"/><br/><h4 id="foot-words">Delete app</h4></a></li>
 <li><a href="https://en.meaww.com/support"> <img src="artimg/contactus.png" alt="contact"/><br/><h4 id="foot-words">Contact us </h4></a></li>
 <li><a href="https://en.meaww.com/privacy"><img src="artimg/privacy.png" alt="privacy"/><br/><h4 id="foot-words">Privacy </h4></a></li>
 </ul>
 <h5 id="foot-lastsent">Disclaimer:All content is provided for fun and entertainment purposes only.</h5>


</footer>
</div>
);
}
}
export default Footcls;
