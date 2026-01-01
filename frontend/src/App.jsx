import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbaravbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Projects";
import ProjectHandGestureControl from "./pages/ProjectDetail";
import Service from "./pages/Services";
import Contact from "./pages/contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="container mx-auto px-4">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Service />
      <Contact />

        <Routes>
          <Route path="/projects/:id" element={<ProjectHandGestureControl />}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
