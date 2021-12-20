// import { Link } from "react-router-dom";

// export default function App() {
//   return (
//     <div>
//       <h1>Bookkeeper</h1>
//       <nav
//         style={{
//           borderBottom: "solid 1px",
//           paddingBottom: "1rem"
//         }}
//       >
//         <Link to="/">Home </Link>|{" "}
//         <Link to="/invoices">Invoices</Link> |{" "}
//         <Link to="/expenses">Expenses</Link>
//       </nav>
//     </div>
//   );
// }
// import logo from './profile_pic.png';
// import banner from './banner.jfif';
import './App.css';
import logo from "./profile_pic.png";
import { Link } from "react-router-dom";
function App() {
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

      <div>
      <img src={logo} className="App-logo" alt="logo" />

      <p>Hello! It is I, Gabriela!</p>

      <p>Click through my website to get to know me and my passion of the STEM Field. </p>
      <p>Thanks for stopping by!</p>

      
    
    </div>

    <footer className="footer">s
  <p>2021 Galaxy Productions, Inc.</p>
</footer>

</div> 
   
  );
}

export default App;
