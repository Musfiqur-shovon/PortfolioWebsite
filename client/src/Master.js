import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Project from "./components/projects/Project";
import Service from "./components/service/Service";
import Skills from "./components/skills/Skills";

function Master() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Service />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default Master;
