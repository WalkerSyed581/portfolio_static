import "./App.css";
import About from "./components/about/About";
import CTA from "./components/CTA";
import Header from "./components/Header";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/Footer";
import "tw-elements";

function App() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  return (
    <div className="App scroll-smooth">
      <Header />
      <CTA />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
