import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './components/data'




export default function App() {
  const card = data.map(item => {
    return (
      <Card 
        Key={item.id}
        item={item}
        // {...item} This is spread object syntax and I won't need to pass it individually to my props
      />
    )
  })

  return (
  <div>
    <Navbar />
    <Hero />
    <section className="cards--list">
    {card}
    </section>
  </div>
  )
}
