import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
// import AboutMe from './components/routing/AboutMe';
// import Contact from './components/routing/Contact';
// import RecentProjects from './components/routing/RecentProjects';


ReactDOM.render(
  <BrowserRouter>
    <App />
    {/* <Routes>
  <Route path="/" element={<App />} />

  <Route path="AboutMe" element={<AboutMe />} />

  <Route path="RecentProjects" element={<RecentProjects />} />

  <Route path="Contact" element={<Contact />} />

</Routes> */}
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
