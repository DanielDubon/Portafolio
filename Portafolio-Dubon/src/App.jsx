import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Proyects';
import Contact from './components/Contact';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
