// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import NavBar from "./components/NavBar.jsx"
import Hero from "./components/Hero.jsx"
import Card from "./components/Card.jsx"
import Data from "./data.js"

function App() {
  let data = Data.map(e => {
    return <Card key={e.id} item={e}/>
  })
  return (
    <>
      <NavBar />
      <Hero />
      <section className="main-card">
        {data}
      </section>
    </>
  )
}

export default App
