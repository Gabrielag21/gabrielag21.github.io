import logo from './profile_pic.png';
// import banner from './banner.jfif';
import './App.css';
// import NavBar from './components/NavBar';
import AboutMe from './components/routing/AboutMe';
import Contact from './components/routing/Contact';
import RecentProjects from './components/routing/RecentProjects';
// import { Route, Routes } from 'react-router';
import { Link, Route, Routes } from 'react-router-dom';


function App() {
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


      <header className="App-header">

        {/* <img src={logo} className="App-logo" alt="logo" />

        <p>My name is Gabriela! Nice to e-meet you!</p> */}
 
  {/* <a
          className="App-link"
          href="https://github.com/Gabrielag21"
          target="_blank"
          rel="noopener noreferrer">
          Github Link!
        </a> */}

      </header>

      <div>
      <img src={logo} className="App-logo" alt="logo" />

      <p>Hello! It is I, Gabriela!</p>

      <p>Click through my website to get to know me and my passion of the STEM Field. </p>
      <p>Learn more about me in the "About Me" tab, check out my recent projects in the "Recent Projects" tab, or check out the many ways you can contact me by clicking the "Contact me" tab!</p>
      <p>Thanks for stopping by!</p>

    </div>

    <footer className="footer">
  <p>2021 Galaxy Productions, Inc.</p>
</footer>

{/* <Routes>
  <Route path="/" element={<App />} />

  <Route path="AboutMe" element={<AboutMe />} />

  <Route path="RecentProjects" element={<RecentProjects />} />

  <Route path="Contact" element={<Contact />} />

</Routes> */}
</div>    
  );
}

export default App;
