import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Components
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About';
import Skills from './components/Skills/Skills'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'


const App = () => {
  return (
    <div>
      <div className='app-body'>
        <Header />
        <Nav />
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/resume' element={<Resume />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route />
      </Routes>
    </div>
  )
}

export default App