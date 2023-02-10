import React from 'react'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'

const FirstComponent = (props) => {
    // Props are passed in as an object
    console.log(props)
  return (
    <div>
        <p>In my FirstComponent!</p>
        <SecondComponent/>
        <ThirdComponent changed="Gray"/>
        <h1>From {props.firstName}</h1>
    </div>
  );
}

export default FirstComponent