import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

const changeHandler = (e) => {
    setUserInfo({
        ...userInfo,
        [e.target.name]: e.target.value
    })
}

const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/users/register', userInfo, {withCredentials: true})
        .then(res => {
            console.log(res)
            navigate('/dashboard')
        })
        .catch(err => console.log(err))
}

  return (
    <div>
        <form className="col-md-6 mx-auto" onSubmit={submitHandler}>
            <h3 className="text-center">Register</h3>
            <div className="form-group">
                <label className="form-label">First Name:</label>
                <input type="text" className="form-control" name="firstName" value={userInfo.firstName} onChange={changeHandler}/>
            </div>
            <div className="form-group">
                <label className="form-label">Last Name:</label>
                <input type="text" className="form-control" name="lastName" value={userInfo.lastName} onChange={changeHandler}/>
            </div>
            <div className="form-group">
                <label className="form-label">Email:</label>
                <input type="email" className="form-control" name="email" value={userInfo.email} onChange={changeHandler}/>
            </div>
            <div className="form-group">
                <label className="form-label">Password:</label>
                <input type="password" className="form-control" name="password" value={userInfo.password} onChange={changeHandler}/>
            </div>
            <div className="form-group">
                <label className="form-label">Confirm Password:</label>
                <input type="password" className="form-control" name="confirmPassword" value={userInfo.confirmPassword} onChange={changeHandler}/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary mt-3">Register</button>
            </div>
        </form>
    </div>
  )
}

export default RegisterForm