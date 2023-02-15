import React, {useState} from 'react'

const Fairy = (props) => {

const {fairyName, fairyColor, fairyBowType, fairyMatches} = props
//      getter, setter
const [matches, setMatches] = useState(fairyMatches)

const addMatches = () => {
    setMatches(matches + 1)
}

const removeMatches = () => {
    setMatches(matches - 1)
}

  return (
    <div>
        <h2>Fairy Name: {fairyName}</h2>
        <h2>Fairy Color:{fairyColor}</h2>
        <h2>Fairy Bow Type: {fairyBowType}</h2>
        <h2>Fairy Matches: {matches}</h2>
        <button onClick={addMatches}>Add Matches!</button>
        <button onClick={removeMatches}>Remove Matches!</button>
        <hr />
    </div>
  )
}

export default Fairy