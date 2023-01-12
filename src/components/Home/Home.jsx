import React from 'react'
import { useState } from 'react'

// Components
import About from '../About/About'
import Projects from '../Projects/Projects'
import Resume from '../Resume/Resume'
import NavHeader from '../NavHeader/NavHeader'
import Welcome from '../Welcome/Welcome'
import Button from '../Button/Button'

const Home = () => {
  const [darkToggle, setDarkToggle] = useState (false)


  return (
    <div>
      <div>
        <NavHeader />
      </div>
      <div class=''>
        <Welcome />
      </div>
      <div>
        <About />
      </div>
    </div>
  )
}

export default Home