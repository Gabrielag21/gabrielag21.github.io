import logo from './profile_pic.png';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function Home() {
  return (
    
    <div className="App">
      <div className="banner">Welcome!</div>
      {/* <NavBar/> */}

    {/* NAV BAR */}
      <nav>
    <ul>
      <li> <Link to="/"> Home </Link> </li>
      <li> <Link to="/AboutMe"> About Me </Link> </li>
      <li> <Link to="/RecentProjects"> Recent Projects </Link> </li>
      <li> <Link to="/Contact"> Contact  </Link> </li>
    </ul>
    </nav>


      <header className="App-header"></header>

      <div>
      <img src={logo} className="App-logo" alt="logo" />

      <p>Hello! It is I, Gabriela!</p>

      <p>Click through my website to get to know me and my passion of the STEM Field. </p>
      <p>Thanks for stopping by!</p>


      <div class="space stars1"></div>
      <div class="space stars2"></div>
      <div class="space stars3"></div>
    
    </div>

    <footer className="footer">
  <p>2021 Galaxy Productions, Inc.</p>
</footer>

</div> 
   
  );
}

export default Home;
