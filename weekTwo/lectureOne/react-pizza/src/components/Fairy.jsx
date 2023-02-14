import React, {useState} from 'react'

const Fairy = (props) => {
    const [fairyMatches, setFairyMatches] = useState(props.fairyMatches)

    const addMatch = () => {
        setFairyMatches(fairyMatches + 1)
    }

  return (
    <div>
        <h2>Fairy Name: {props.fairyName}</h2>
        <h2>Fairy Color: {props.fairyColor}</h2>
        <h2>Fairy Bow Type: {props.fairyBowType}</h2>
        <h2>Fairy Matches: {fairyMatches}</h2>
        <button onClick={addMatch}>Add new match!</button>
    </div>
  )
}

export default Fairy