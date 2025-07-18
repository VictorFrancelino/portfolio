import ParticlesComponent from "./components/particles";
import Home from "./sections/home";
import AboutMe from "./sections/aboutMe";
import Education from "./sections/education";
import Projects from "./sections/projects";
import Contacts from "./sections/contacts";
import Footer from "./sections/footer";

function App() {
  return (
    <>
      <ParticlesComponent />
      <main>
        <Home />
        <AboutMe />
        <Education />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
