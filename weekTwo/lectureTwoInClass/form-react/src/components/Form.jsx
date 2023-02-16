import React, {useState} from 'react'


const Form = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName, lastName, age, email);
    }

  return (
    <div>
        <form action="" className="form col-md-4 mx-auto" onSubmit={handleSubmit}>
            <h1>Please fill out this form!</h1>
            <div className="form-group mt-3">
                <label htmlFor="" className="form-label">First Name:</label>
                <input type="text" className="form-control" onChange={(e)=>{setFirstName(e.target.value)}}/>
            </div>
            <div className="form-group mt-3">
                <label htmlFor="" className="form-label">Last Name:</label>
                <input type="text" className="form-control" onChange={(e)=>{setLastName(e.target.value)}}/>
            </div>
            <div className="form-group mt-3">
                <label htmlFor="" className="form-label">Age:</label>
                <input type="number" name="" id="" className="form-control" onChange={(e)=>{setAge(e.target.value)}}/>
            </div>
            <div className="form-group mt-3">
                <label htmlFor="" className="form-label">Email:</label>
                <input type="email" name="" id="" className="form-control" onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <button className="btn btn-primary mt-3">Submit</button>
        </form>
    </div>
  )
}

export default Form