import React from 'react'
import Hero from './components/Hero/Hero'
import Testmonials from './components/Testmonials/Testmonials'
import Team from './components/Team/Team'
import "./App.css"
import ProfileCard from './components/profile/ProfileCard'
import { userProfiles } from './data'

export default function App() {

  return (
    <div className='mainCon'>
        <Hero />
        <Testmonials />
        <Team />
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10 relative inline-block ">
  <span className="relative z-10 px-4 bg-white rounded-xl">Meet<span className="text-blue-600">Our</span>Experts</span>
  <span className="absolute left-0 right-0 bottom-0 h-1 bg-blue-300 z-0"></span>
</h2>

        <ProfileCard userInfo={userProfiles}/>
    </div>
  )
}
