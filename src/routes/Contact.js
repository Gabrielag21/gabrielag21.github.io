import { Link } from "react-router-dom";
import React, {useState} from 'react';

 function Contact() {
  const [isOn, currentState] = useState("Invisible!");
  const [email, currentEmail] = useState(" ");
  const [LinkedIn, currentLinkedIn] = useState(" ");

  function reset(e){
    alert("RESETTING STATES");
    currentState("Invisible!");
    currentEmail("");
    currentLinkedIn("")
 }

 function revealEmail(e){
  if(isOn == "Invisible!"){
    currentState("Showing!");
    currentEmail("gabriela.gonzalez@lc.cuny.edu");
  }else{
    currentState("Invisible!");
    currentEmail("");
  }
 }

  function revealLinkedIn(e){
    if(isOn == "Invisible!"){
      currentState("Showing!");
      currentLinkedIn("www.linkedin.com/in/gabriela~gonzalez");
    }else{
      currentState("Invisible!");
      currentLinkedIn("");
    }
  


}


  return (
    
    <div className="App">
      
      <div className="banner">Welcome!</div>

   {/* MOVING BACKGROUND */}


   {/* NAV BAR */}
      <nav>
    <ul>
      <li> <Link to="/Home"> Home </Link> </li>
      <li> <Link to="/AboutMe"> About Me </Link> </li>
      <li> <Link to="/RecentProjects"> Recent Projects </Link> </li>
      <li> <Link to="/Contact"> Contact  </Link> </li>
    </ul>
    </nav>

      <header className="App-header"></header>

      <p>Contact Me!</p>
      <p>If you would like to contact me, you can reach me by either by email or LinkedIn! Click below to reveal either or:</p>
      
      <button onClick={revealEmail}>Reveal email!</button>

      <p onClick={reset} onClick={revealEmail} > {email}</p>

      <br/>
      
      <button onClick={revealLinkedIn}>Reveal LinkedIn!</button>

      <p onClick={reset} onClick={revealLinkedIn}> {LinkedIn} </p>

<br/>
      <button className="resetButton" onClick={reset}>Reset</button>
    
    
    
      <footer className="footer">
        <p>2021 Galaxy Productions, Inc.</p>
      </footer>

</div> 
   
  );
  }
  export default Contact;