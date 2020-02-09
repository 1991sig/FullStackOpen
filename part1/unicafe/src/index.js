import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistics = (props) => {
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad

    const nClicks = good + neutral + bad 
    const avgScore = nClicks === 0 ? 0 : (good - bad)/nClicks
    const posRatio = nClicks === 0 ? 0 : 100*(good)/nClicks
    
    return (
        <div>
            <p>
                Good {good}<br></br>
                Neutral {neutral}<br></br>
                Bad {bad}<br></br>
                All {nClicks}<br></br>
                Average {avgScore}<br></br>
                Positive {posRatio} %
            </p>
        </div>
    )

}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        <h2>Give Feedback</h2>
        <button onClick={() => setGood(good + 1)}>Good</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>
        <h2>Statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)