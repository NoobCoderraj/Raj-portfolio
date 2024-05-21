import './App.css'
import { useState } from 'react'
import { Home } from './components/home/Home'
import { Services } from './components/services/Services'
import { Skills } from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Resume from './components/resume/Resume'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
function App() {
 

  return (
    <main className='main'>
<Home/>
<Services/>
<Skills/>
<Portfolio/>
<Resume/>
<Testimonials/>
<Contact/>
<Footer/>
    </main>
  )
}

export default App
