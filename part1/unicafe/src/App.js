import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const CheckFeedback = ({good,neutral,bad,total}) => {
  if (total===0)
  {
    return <p> No feedback given</p>
  }
  return <Statistics good={good} neutral={neutral} bad = {bad} total={total} />
}

const StatisticLine = ({text,value}) => {
  return (
    <tr>{text}: {value}</tr>
  )
}

const Statistics = ({good,neutral,bad,total}) => {

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

    return ( good / total )*100
  }
  
  const average=calcAverage()
  const pos=calcPositive()
  const posString=`${pos} %`

  return(
      <table>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="Total" value={total} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" value={posString} />
      </table>
  )
} 

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

  


  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button handleClick={handleGoodClick} text="Good"/>
        <Button handleClick={handleNeutralClick} text="Neutral" />
        <Button handleClick={handleBadClick} text="Bad" />
      </div>
      <h2> Statistics </h2>
      <CheckFeedback good={good} neutral={neutral} bad = {bad} total={total} />
    </div>
  )
}


export default App