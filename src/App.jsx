import { useState } from 'react'
import './App.css'
import Skills from './components/Skills'
import Home from './components/Home'
import Navegation from './components/Navegation'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  const [mode, setMode] = useState(true)
  const handleToggle = () => {
    setMode(!mode)
  }
  return (
    <main className={mode ?'ligth':'dark'}>
      <Navegation mode={mode} handleToggle={handleToggle}/>
      <Home />
      <AboutMe />
      <Skills />
      <Portfolio mode={mode}/>
      {/* <Contact /> */}
    </main>
  )
}

export default App
