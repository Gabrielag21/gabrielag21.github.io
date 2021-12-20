import { Link } from "react-router-dom";

 function AboutMe() {
  return (
    
    <div className="App">
      <div className="banner">Welcome!</div>

   {/* MOVING BACKGROUND */}
    <div class="space stars1"></div>
      <div class="space stars2"></div>
      <div class="space stars3"></div>

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

      <p>About Me!</p>

    <footer className="footer">
  <p>2021 Galaxy Productions, Inc.</p>
</footer>

</div> 
   
  );
  }
  export default AboutMe;