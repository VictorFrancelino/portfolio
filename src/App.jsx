import './App.css'
import Hero from "./components/hero"
import AboutMe from './components/aboutMe'
import ParticlesComponent from "./components/particles"
import Education from "./components/education"
import Projects from "./components/projects"
import Contacts from './components/contacts'
import Footer from "./components/footer"

function App() {
  return (
    <>
      <ParticlesComponent />
      <main>
        <Hero />
        <AboutMe />
        <Education />
        <Projects />
        <Contacts />
        <Footer />
        {/*
        */}
      </main>
    </>
  )
}

export default App