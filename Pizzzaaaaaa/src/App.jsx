import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Pizza from './assets/pizza.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
    <nav>
      <div className="img">
      <img src= {reactLogo} alt='ReactLogo' />
      <h3>React Facts</h3></div>
      <h4>React Course- Project 1</h4>
    </nav>
    <main className="container">
      <h2>Fun Facts about React</h2>
      <ul>
        <li>Was first released in 2013</li>
        <li>Has well over 100k stars on Github  </li>
        <li>Was originally created by Jordan Walke</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Was originally created by Jordan Walke</li>

      </ul>
    </main>

    </>
  )
}

export default App
