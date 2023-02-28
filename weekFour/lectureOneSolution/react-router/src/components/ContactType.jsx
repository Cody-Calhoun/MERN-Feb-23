import React from 'react'
import { useParams } from 'react-router-dom';



const ContactType = () => {

    const { type } = useParams();
  return (
    <div>
        <h1>Thank you for contacting via {type}</h1>
    </div>
  )
}

export default ContactType