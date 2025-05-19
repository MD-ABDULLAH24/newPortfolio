import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Resume from './Components/Resume'
import Services from './Components/Services'
import Projects from './Components/Projects'
import Blog from './Components/Blogs'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Resume/>
      <Skills/>
      <Services/>
      <Projects/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App