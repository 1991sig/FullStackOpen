import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    const { handleClick, label } = props
    return (
        <button onClick={handleClick}>{label}</button>
    )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, SetVotes] = useState(Array(props.anecdotes.length).fill(0))

  // Schwarzian transform 
  const nAnecdotes = props.anecdotes.length
  const maxVotedAnecdote = props.anecdotes
    .map( (item, index) => [votes[index], item] )
    .sort( ([votes1], [votes2]) => votes2 - votes1 )
    .map( ([nvotes, index]) => [index, nvotes] )

  const getRandomNumber = () => {
      return (
        Math.floor( Math.random() * nAnecdotes )
      )
  }

  const handleVote = () => {
      const copy = [...votes]
      copy[selected] += 1
      SetVotes(copy)
  }

  return (
    <div>
        <h1>Anecdote of the day</h1>
        <div>
            {props.anecdotes[selected]}
        </div>
        <div>
            has {votes[selected]} votes
        </div>
        <Button handleClick={handleVote} label="Vote" />
        <Button handleClick={() => setSelected(getRandomNumber())} label="Next Anecdote" />
        <h1>Anecdote with most votes</h1>
        <div>{maxVotedAnecdote[0][0]}</div>
        <div>has {maxVotedAnecdote[0][1]} votes</div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)