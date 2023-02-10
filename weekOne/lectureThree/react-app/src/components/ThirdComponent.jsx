import React from 'react'

const ThirdComponent = (props) => {
  return (
    <div>This is my ThirdComponent
        <p>Woah, his name is {props.changed}</p>
    </div>
  )
}

export default ThirdComponent