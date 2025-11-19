import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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


      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
