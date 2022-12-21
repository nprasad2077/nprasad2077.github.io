import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'


const Nav = () => {
  return (
    <nav className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/skills'>Skills</Link>
        <Link to='/about'>About</Link>
        <Link to='/resume'>Resume</Link>
        <Link to='/contact'>Contact</Link>
    </nav>
  )
}

export default Nav