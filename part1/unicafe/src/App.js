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

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }
  
  const handleNeutralClick = () => {
    const updatedNeutral = neutral +1
    setNeutral(updatedNeutral)
  }

  const handleBadClick = () => {
    const updatedBad= bad+1
    setBad(updatedBad)
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
      </div>
    </div>
  )
}


export default App