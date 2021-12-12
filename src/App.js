import logo from './profile_pic.png';
import banner from './banner.jfif';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    
    <div className="App">
      <div className="banner">Welcome!</div>
      <NavBar/>
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


</div>    
  );
}

export default App;
