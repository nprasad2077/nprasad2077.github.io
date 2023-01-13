import React from 'react'
import { useState } from 'react'

// Components
import About from '../About/About'
import Projects from '../Projects/Projects'
import Resume from '../Resume/Resume'
import NavHeader from '../NavHeader/NavHeader'
import Welcome from '../Welcome/Welcome'

const Home = () => {
  return (
    <div>
      <div>
        <NavHeader />
      </div>
      <div>
        <Welcome />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Resume />
      </div>
    </div>
  )
}

export default Home