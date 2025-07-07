// import React from 'react'
// import Hero from './components/Hero/Hero'
// import Testmonials from './components/Testmonials/Testmonials'
// import Team from './components/Team/Team'
// import "./App.css"
// import ProfileCard from './components/profile/ProfileCard'
// import { userProfiles } from './data'
// import Parent from './components/Parent'
// import { UserContext } from './context/userContext'
// import GrandChild from './components/GrandChild'

// export default function App() {

//   const user = "VamseeKrishna";

//   return (
// //     <div className='mainCon'>
// //         <Hero />
// //         <Testmonials />
// //         <Team />
// //         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10 relative inline-block ">
// //   <span className="relative z-10 px-4 bg-white rounded-xl">Meet<span className="text-blue-600">Our</span>Experts</span>
// //   <span className="absolute left-0 right-0 bottom-0 h-1 bg-blue-300 z-0"></span>
// // </h2>

// //         <ProfileCard userInfo={userProfiles}/>
// //     </div>
//     // <UserContext.Provider value={{user : "VamseeKrishna"}}>
//     //   <Parent />
//     //   {/* <Child />*/}
//     //   <GrandChild />
//     // </UserContext.Provider>  
    
//     <>
    
    
    
    
//     </>

//   )
// }




// App.js
import React, { useState } from 'react'
import { ThemeContext } from './context/ThemeContext'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import BankAccount from './components/BankAccount'

export default function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`flex flex-col min-h-screen transition-colors duration-300 ${
          theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
        }`}
      >
        <Header />
        <Content />
        <BankAccount />
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}
