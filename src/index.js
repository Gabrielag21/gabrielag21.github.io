import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import AboutMe from "./routes/AboutMe";
import Contact from "./routes/Contact";
import RecentProjects from "./routes/RecentProjects";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<App />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/RecentProjects" element={<RecentProjects />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);