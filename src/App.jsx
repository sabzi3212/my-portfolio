import About from "./components/About/About"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  )
}

export default App
