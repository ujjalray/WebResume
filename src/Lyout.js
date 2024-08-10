import React from 'react'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import Work from './components/Work/Work'
import Project from './components/Projects/Project'
import Contact from './components/Contact/Contact'
import Footer from './components/Contact/Footer'
import Skils from './components/Skils/Skils'
import Education from './components/Education/Education'

const Lyout = () => {
  return (
    <div>

         
         <Intro />
         <Project />
         <Education />
         <Skils />
         <Work />
       
        
         <Contact />
         <Footer />

      
    </div>
  )
}

export default Lyout
