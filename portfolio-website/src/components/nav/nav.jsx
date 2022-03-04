import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {BiBrain} from 'react-icons/bi'
import {MdOutlineElectricalServices} from 'react-icons/md'
import {BsChatLeftDots} from 'react-icons/bs'


const nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUsergroupAdd /></a>
      <a href="#experience"><BiBrain /></a>
      <a href="#services"><MdOutlineElectricalServices /></a>
      <a href="#contact"><BsChatLeftDots /></a>
    </nav>
  )
}

export default nav