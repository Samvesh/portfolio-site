import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import About from "./pages/About.jsx";
import Certifications from "./pages/Certifications.jsx";
import Contact from "./pages/Contact.jsx";
import Experience from "./pages/Experience.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";

function SinglePageApp() {
  return (
    <div className="portfolio-sections">
      <div id="home" className="portfolio-section">
        <Home />
      </div>
      <div id="projects" className="portfolio-section">
        <Projects />
      </div>
      <div id="experience" className="portfolio-section">
        <Experience />
      </div>
      <div id="certifications" className="portfolio-section">
        <Certifications />
      </div>
      <div id="about" className="portfolio-section">
        <About />
      </div>
      <div id="contact" className="portfolio-section">
        <Contact />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<SinglePageApp />} />
      </Routes>
    </Layout>
  );
}

