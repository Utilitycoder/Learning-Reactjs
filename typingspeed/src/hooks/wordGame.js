import { useState, useRef, useEffect} from 'react'

export default function useWordGame(StartingTime = 5) {
    // Initializing the first state of the app
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(StartingTime)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textBoxRef = useRef(null)

    function startGame() {
       if (StartingTime) {
        setIsTimeRunning(true)
        setWordCount(0)
        setText("")
        setTimeRemaining(StartingTime)
        textBoxRef.current.disabled = true
        textBoxRef.current.focus()
        }
    }

    function endGame() {
        setIsTimeRunning(false)
        const numWord = calculateWordCount(text)
        setWordCount(numWord)
        setTimeRemaining(0)
    }

    // We grabbed the value from the textArea and set it to text variable to controlled form
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }


    // Count the words typed without counting the white spaces.
    // The parameter is the text we grabbed from the textarea
    function calculateWordCount(text) {
        const wordsArray = text.trim().split(" ") //removed white space and split the array into words
        return wordsArray.filter(word => word !== "").length // filter each word and count the words
    }

    // Countdown the Starting time
    function decrementTime() {
        setTimeRemaining(time => time - 1)
    }

    // We ran use effect to decrement the start time upon if conditions are met and at interval of 1 sec
    useEffect(() => {
        if (isTimeRunning && timeRemaining !== 0) {
            setTimeout(decrementTime, 1000)
        } else if (timeRemaining === 0) {
            endGame()
        }
    }, [isTimeRunning, timeRemaining])


    return { handleChange, isTimeRunning, timeRemaining, text, wordCount, textBoxRef, startGame}

}