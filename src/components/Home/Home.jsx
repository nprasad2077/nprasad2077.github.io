import React from 'react'
import { useState } from 'react'

// Components
import Sidebar from '../Sidebar/Sidebar'

const Home = () => {
  const [darkToggle, setDarkToggle] = useState (false)


  return (
    <div
      class={`h-screen w-full flex items-center justify-center bg-gray-300 flex-col ${
        darkToggle && 'dark'
      }`}
    >
      <label class="toggleDarkBtn">
        <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
        <span class="slideBtnTg round"></span>
      </label>
      <Sidebar />
    </div>
  )
}

export default Home