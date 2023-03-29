import React, {useState} from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const RegisterForm = () => {

    const navigate = useNavigate();
    const [userReg, setUserReg] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e) => {
        setUserReg({
            ...userReg,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/register', userReg, {withCredentials: true})
            .then(res => {
                console.log(res)
                navigate('/dashboard')})
            .catch(err => console.log(err))
    }
  return (
    <div>
        <h1>Register!</h1>
        <form action="" className="col-md-5" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" className="form-control" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" className="form-control" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" className="form-control" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" className="form-control" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" className="form-control" onChange={handleChange}/>
            </div>
            <button className="btn btn-primary">Register</button>

        </form>
    </div>
  )
}

export default RegisterForm