import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './components/data'
// import Katie from './images/Katie.png'
// import mountain from './images/mountain.png'
// import wedding from './images/wedding.png'




export default function App() {
  const card = data.map(item => {
    return (
      <Card 
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}

      />
    )
  })

  return (
  <div>
    <Navbar />
    <Hero />
    {card}
  </div>
  )
}

