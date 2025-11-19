import { useState } from 'react'
import './App.css'

import { Projects } from './Projects'
import { Experiences } from './Experience'
import { About } from './About'
import TypingText from './TypingText'


function App() {

  //project defintions
  const [count, setCount] = useState(0)
  const [activeSection, setActiveSection] = useState<"about" | "projects" | "experiences">("about");

  return (
    <>
      <div className = "row">
        <div className = "col">
          <h1>Caitlin McInerny</h1>
          <TypingText phrases={["Software Engineer", "Full Stack Developer", "Computer Science Student"]} />
          <a href = "https://github.com/cai-mci">Github</a>
          <a href = "https://www.linkedin.com/in/cai-mci/"> LinkedIn</a>
          <button onClick={() => setActiveSection("about")}>About</button>
          <button onClick={() => setActiveSection("projects")}>Projects</button>
          <button onClick={() => setActiveSection("experiences")}>Experiences</button>
        </div>
        <div className = "col">
        {activeSection === "about" && <About />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "experiences" && <Experiences />}
        </div>
      </div> {/* end row */}

    </>
  )
}

export default App
