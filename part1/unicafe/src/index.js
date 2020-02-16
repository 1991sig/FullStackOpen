import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
}

const Statistic = (props) => {
    const {text, value, label} = props
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
            <td>{label}</td>
        </tr>
    )
}

const Statistics = (props) => {
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad
    const nClicks = good + neutral + bad 

    if (nClicks === 0) {
        return (
            <div>
                <h2>Statistics</h2>
                No feedback given
            </div>
        )
        
    } else {
        
    
        const avgScore = nClicks === 0 ? 0 : (good - bad)/nClicks
        const posRatio = nClicks === 0 ? 0 : 100*(good)/nClicks

        return (
            <div>
                <h2>Statistics</h2>
                <table>
                    <Statistic text="Good" value={good} />
                    <Statistic text="Neutral" value={neutral} />
                    <Statistic text="Bad" value={bad} />
                    <Statistic text="All" value={nClicks} />
                    <Statistic text="Average" value={avgScore} />
                    <Statistic text="Positive" value={posRatio} label="%" />
                </table>
            </div>
        )
    }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        <h2>Give Feedback</h2>
        <Button handleClick={() => setGood(good + 1)} text="Good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="Bad" />
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)