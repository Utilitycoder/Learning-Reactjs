import React from 'react'
import {useState, useEffect, useRef} from 'react'

const [text, setText] = useState("")
const [timeRemaining, setTimeRemaining] = useState(5)
const [isTimerunning, setIsTimerunning] = useState(false)
const textRef = useRef(null)

