import { Link } from "react-router-dom";
import logo from "./me.jpg";
 function AboutMe() {
  return (
    
    <div className="App">
      <div className="banner">Welcome!</div>

   {/* MOVING BACKGROUND */}
    <div class="a-space stars1"></div>
      <div class="a-space stars2"></div>
      <div class="a-space stars3"></div>

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

      <h1>About Me!</h1>
      <img src={logo} className="AboutMeLogo" alt="logo" />

      <p className="AboutMe">My name is Gabriela! I currently attend Lehman College seeking my undergratuate degree. I want to major in Computer Science. I still do not the profession I aspire to work in but that is all apart of the jounery of life.</p>
    

    <footer className="footer">
  <p>2021 Galaxy Productions, Inc.</p>
</footer>

</div> 
   
  );
  }
  export default AboutMe;