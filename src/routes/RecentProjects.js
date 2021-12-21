import { Link } from "react-router-dom";

 function RecentProjects() {
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

      <h2>Recent Projects!</h2>
          <p>I have spent most of my time on Codepen.io playing around with HTML, CSS, and JavaScript. Here are some of the small things I've created!</p>
           <div class="image-section1"> 
            <p><a href="https://codepen.io/Gabriela21/full/NoEMem"> Project 1</a> is a basic find the button game.</p>
              </div>

              <div class="image-section1"> 
            <p><a href="https://codepen.io/Gabriela21/full/xNmOXo"> Project 2 </a> is a basic survey form. (Note: it does not work) </p>
              </div>

              <div class="image-section1"> 
            <p> <a href="https://codepen.io/Gabriela21/pen/bOQGyw"> Project 3 </a> is a simple Mad Libs game</p>
              </div>

      
          <p>I also have a small <a href="https://gabrielagonzalez202.wixsite.com/mysite"> photography website </a> you can check out from a few years prior. </p>
        <p>Additonally, this website is also a recent project! This was created with react and is my first time deploying a website. </p>
        

    <footer className="footer">
  <p>2021 Galaxy Productions, Inc.</p>
</footer>

</div> 
   
  );
  }
  export default RecentProjects;