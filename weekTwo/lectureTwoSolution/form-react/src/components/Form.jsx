import React, {useState} from 'react'

const Form = () => {

//useState hook
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [age, setAge] = useState("");
const [email, setEmail] = useState("");

const submitHandler = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, age, email);
}
  return (
    <div>
        <form action="" className="form col-md-4 mx-auto" onSubmit={submitHandler}>
            <label htmlFor="" className="form-label">First Name</label>
            <input type="text" className="form-control" onChange={(e)=>setFirstName(e.target.value)}/>
            {
                //ternary operator
                firstName && firstName.length < 3 ? <p className="text-danger">First name must be at least 3 characters</p> : null
            }
            <label htmlFor="" className="form-label">Last Name</label>
            <input type="text" className="form-control" onChange={(e)=>setLastName(e.target.value)}/>
            {
                //ternary operator
                lastName && lastName.length < 3 ? <p className="text-danger">Last name must be at least 3 characters</p> : null
            }
            <label htmlFor="" className="form-label">Age</label>
            <input type="number" className="form-control" onChange={(e)=>setAge(e.target.value)}/>
            {
                //ternary operator
                age && age < 12 ? <p className="text-danger">Age must be at least 12</p> : null
            }
            <label htmlFor="" className="form-label">Email</label>
            <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
            <button className="btn btn-primary mt-3">Submit</button>
        </form>

    </div>
  )
}

export default Form