import { useState } from 'react'
import './App.css'

import { Projects } from './Projects'
import {Experiences} from './Experience'
import { About } from './About'
import { Leaderships } from './Leadership'
import TypingText from './TypingText'



function App() {

  const [activeSection, setActiveSection] = useState<"about" | "projects" | "leadership" | "experiences">("about");

  return (
    <>
      <div className = "row">
        <div className = "nav_col">
          <h1>Caitlin McInerny</h1>
          <TypingText phrases={["Software Engineer", "Full Stack Developer", "Computer Science Student"]} />
          <div className='row'>
            <a target = "blank" href = "https://www.linkedin.com/in/cai-mci/"> 
              <img src = "about/linkedin.png"/>
              LinkedIn
            </a>
            <a target = "blank" href = "https://github.com/cai-mci">
              <img src = "about/github.png"/>
              Github</a>
          </div>
          {activeSection === "about" && <button className='selected' onClick={() => setActiveSection("about")}>About</button> || <button onClick={() => setActiveSection("about")}>About</button>}
          {activeSection === "projects" && <button className='selected' onClick={() => setActiveSection("projects")}>Projects</button> || <button onClick={() => setActiveSection("projects")}>Projects</button>}
          {activeSection === "experiences" && <button className='selected' onClick={() => setActiveSection("experiences")}>Experience</button> || <button onClick={() => setActiveSection("experiences")}>Experience</button>}
          {activeSection === "leadership" && <button className='selected' onClick={() => setActiveSection("leadership")}>Leadership</button> || <button onClick={() => setActiveSection("leadership")}>Leadership</button>}
        </div>
        <div className = "main_component">
        {activeSection === "about" && <About />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "experiences" && <Experiences />}
        {activeSection === "leadership" && <Leaderships />}
        </div>
      </div> {/* end row */}

    </>
  )
}

export default App
