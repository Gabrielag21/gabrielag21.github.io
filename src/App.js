import logo from './profile_pic.png';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <p>My name is Gabriela! Nice to e-meet you!</p>

  {/* <a
          className="App-link"
          href="https://github.com/Gabrielag21"
          target="_blank"
          rel="noopener noreferrer">
          Github Link!
        </a> */}

      </header>
    </div>
  );
}

export default App;
