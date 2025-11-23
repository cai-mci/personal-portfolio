import { useState } from 'react'
import './App.css'

import { Projects } from './Projects'
import {Experiences} from './Experience'
import { About } from './About'
import { Personal } from './Personal'
import TypingText from './TypingText'



function App() {

  const [activeSection, setActiveSection] = useState<"about" | "projects" | "personal" | "experiences">("about");

  return (
    <>
      <div className = "row">
        <div className = "nav_col">
          <h1>Caitlin McInerny</h1>
          <TypingText phrases={["Software Engineer", "Full Stack Developer", "Computer Science Student"]} />
          <div className='row'>
            <a target = "blank" href = "https://www.linkedin.com/in/cai-mci/"> LinkedIn</a>
            <a target = "blank" href = "https://github.com/cai-mci">Github</a>
          </div>
          {activeSection === "about" && <button className='selected' onClick={() => setActiveSection("about")}>About</button> || <button onClick={() => setActiveSection("about")}>About</button>}
          {activeSection === "projects" && <button className='selected' onClick={() => setActiveSection("projects")}>Projects</button> || <button onClick={() => setActiveSection("projects")}>Projects</button>}
          {activeSection === "experiences" && <button className='selected' onClick={() => setActiveSection("experiences")}>Experience</button> || <button onClick={() => setActiveSection("experiences")}>Experience</button>}
          {activeSection === "personal" && <button className='selected' onClick={() => setActiveSection("personal")}>Personal</button> || <button onClick={() => setActiveSection("personal")}>Personal</button>}
        </div>
        <div className = "main_component">
        {activeSection === "about" && <About />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "experiences" && <Experiences />}
        {activeSection === "personal" && <Personal />}
        </div>
      </div> {/* end row */}

    </>
  )
}

export default App
