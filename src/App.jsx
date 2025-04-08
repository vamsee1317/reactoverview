import React from 'react'
import Hero from './components/Hero/Hero'
import Testmonials from './components/Testmonials/Testmonials'
import Team from './components/Team/Team'
import "./App.css"

export default function App() {
  return (
    <div className='mainCon'>
        <Hero />
        <Testmonials />
        <Team />
    </div>
  )
}
