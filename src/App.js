import logo from './profile_pic.png';
// import banner from './banner.jfif';
import './App.css';
// import NavBar from './components/NavBar';
import AboutMe from './components/routing/AboutMe';
import Home from './components/routing/Home';
import Contact from './components/routing/Contact';
import RecentProjects from './components/routing/RecentProjects';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <div className="banner">Welcome!</div>
      {/* <NavBar/> */}

    {/* NAV BAR */}
      <nav>
    <ul>
      <li> <Link to="/Home"> Home </Link> </li>
      <li> <Link to="/AboutMe"> About Me </Link> </li>
      <li> <Link to="/RecentProjects"> Recent Projects </Link> </li>
      <li> <Link to="/Contact"> Contact  </Link> </li>
    </ul>
    </nav>

{/* 
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
</footer> */}


<Routes>
  <Route path="/Home" element={<Home />} />

  <Route path="/AboutMe" element={<AboutMe />} />

  <Route path="/RecentProjects" element={<RecentProjects />} />

  <Route path="/Contact" element={<Contact />} />

</Routes>

</div> 
   
  );
}

export default App;
