import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [good,setGood]= useState(0)
  const [neutral,setNeutral]=useState(0)
  const [bad,setBad]=useState(0)
  const [total,setTotal]=useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood+bad+neutral)
  }
  
  const handleNeutralClick = () => {
    const updatedNeutral = neutral +1
    setNeutral(updatedNeutral)
    setTotal(good+bad+updatedNeutral)
  }

  const handleBadClick = () => {
    const updatedBad= bad+1
    setBad(updatedBad)
    setTotal(good+updatedBad+neutral)
  }

  const calcAverage = () => {
    if (total===0) {
      return 0
    }

    return(  ( (good*1) + (bad*-1) ) / total)
  }

  const calcPositive = () => {
    if (total===0) {
      return 0
    }

    return( good / total )*100
  }


  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button handleClick={handleGoodClick} text="Good"/>
        <Button handleClick={handleNeutralClick} text="Neutral" />
        <Button handleClick={handleBadClick} text="Bad" />
      </div>

      <h2> Statistics: </h2>
      <div>
        <p> Good: {good} </p>
        <p> Neutral: {neutral}</p>
        <p> Bad: {bad}</p>
        <p> Total: {total}</p>
        <p> Average: {calcAverage()} </p>
        <p> Positive: {calcPositive()}% </p>
      </div>
    </div>
  )
}


export default App