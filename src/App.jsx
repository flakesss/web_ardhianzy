import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <section id="section1" className="section section1">
        <h2>Welcome to ARDHIANZY</h2>
      </section>
      
      <section id="section2" className="section section2">
        <h2>About Us</h2>
      </section>
      
      <section id="section3" className="section section3">
        <h2>Our Services</h2>
      </section>
      
      <section id="section4" className="section section4">
        <h2>Portfolio</h2>
      </section>
      
      <section id="section5" className="section section5">
        <h2>Team</h2>
      </section>
      
      <section id="section6" className="section section6">
        <h2>Testimonials</h2>
      </section>
      
      <section id="section7" className="section section7">
        <h2>Skills</h2>
      </section>
      
      <section id="section8" className="section section8">
        <h2>Experience</h2>
      </section>
      
      <section id="section9" className="section section9">
        <h2>Education</h2>
      </section>
      
      <section id="section10" className="section section10">
        <h2>Projects</h2>
      </section>
      
      <section id="section11" className="section section11">
        <h2>Blog</h2>
      </section>
      
      <section id="section12" className="section section12">
        <h2>Awards</h2>
      </section>
      
      <section id="section13" className="section section13">
        <h2>Contact Us</h2>
      </section>
    </div>
  )
}

export default App