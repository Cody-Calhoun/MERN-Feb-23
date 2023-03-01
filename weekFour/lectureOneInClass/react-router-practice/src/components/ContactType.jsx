import React from 'react'
import {useParams} from 'react-router-dom';

const ContactType = () => {
    const {type} = useParams();
    console.log(typeof(type));
  return (
    <div>
        <h1>Thank you for contacting us via {type}</h1>
    </div>
  )
}

export default ContactType