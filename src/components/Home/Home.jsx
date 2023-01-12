import React from 'react'
import { useState } from 'react'

// Components
import Sidebar from '../Sidebar/Sidebar'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Resume from '../Resume/Resume'
import NavHeader from '../NavHeader/NavHeader'
import Welcome from '../Welcome/Welcome'
import Button from '../Button/Button'

const Home = () => {
  const [darkToggle, setDarkToggle] = useState (false)


  return (
    <div
      class={`h-screen w-full flex items-center justify-center bg-gray-300 flex-row ${
        darkToggle && 'dark'
      }`}
    >
      <label class="toggleDarkBtn">
        <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
        <span class="slideBtnTg round"></span>
      </label>
      {/* <NavHeader /> */}
      <div class='flex'>
        <Welcome />
        <About />
        <Projects />
        <Resume />
      </div>
    </div>
  )
}

export default Home