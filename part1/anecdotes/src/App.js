import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [points,setPoints] =useState(Array(8).fill(0))
  const [mostV,setMostV] = useState(0)

  const randAnecdote = () => {
    const r = Math.ceil(Math.random() * (anecdotes.length-1))
    setSelected(r)
  }

  const vote = () => {
    const copy = [...points]
    copy[selected]+=1
    setPoints(copy)
    console.log("votes ",copy[selected])
    
    if (copy[selected]>copy[mostV])
    {
      const m = selected
      setMostV(m)
    }
    console.log("most",copy[mostV])
  }

  return (
    <>
    <p>
      {anecdotes[selected]} 
    </p>

    <p>
      Has {points[selected]} votes
    </p>

    <div> 
      <button onClick={randAnecdote}> Next Anecdote </button>
      <button onClick={vote}> Vote </button>
    </div>

    <br/>
    <h1> Anecdote with the most votes </h1>
    <p>
      {anecdotes[mostV]}
      
    </p>

    </>
  )
}

export default App