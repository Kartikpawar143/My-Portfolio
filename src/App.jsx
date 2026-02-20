import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  const [activePage, setActivePage] = useState("about");

  return (
    <main>
      <Sidebar />

      <div className="main-content">
        <Navbar activePage={activePage} setActivePage={setActivePage} />

        {activePage === "about" && <About active />}
        {activePage === "resume" && <Resume active />}
        {activePage === "certifications" && <Certifications active />}
        {activePage === "projects" && <Projects active />}
        {activePage === "blog" && <Blog active />}
        {activePage === "contact" && <Contact active />}
      </div>
    </main>
  );
}

export default App;