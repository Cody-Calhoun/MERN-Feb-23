import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const PlayerForm = () => {
    const [player, setPlayer] = useState({
        name: "",
        preferredPosition: ""
    })
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const onChangeHandler = (e) => {
        setPlayer({
            ...player,
            [e.target.name]: e.target.value
        })
    }

    const formValidator = () => {
        let isValid = true
        if (player.name.length < 2) {
            return false
        }
        if (player.preferredPosition.length < 2) {
            return false
        }
        return isValid
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (formValidator()) {
            axios.post('http://localhost:8000/api/players', player)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
        else{
            setErrors({
                name: "Name must be at least 2 characters",
                preferredPosition: "Preferred Position must be at least 2 characters"
            })
        }
        navigate("/api/players")

    }
        // axios.post('http://localhost:8000/api/players', {
        //     name: e.target.name.value,
        //     preferredPosition: e.target.position.value
        // })
  return (
    <div>

        <h1>Add Player</h1>
        {errors.name ? <p className="text-danger">{errors.name}</p> : ""}
        <form action="" className="col-md-6 mx-auto" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Player Name</label>
                <input type="text" className="form-control" name="name" id="name" onChange={onChangeHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor="position">Preferred Position</label>
                <input type="text" className="form-control" name="preferredPosition" id="position" onChange={onChangeHandler}/>
            </div>
            <button className="btn btn-info mt-3">Create Player</button>
        </form>
    </div>
  )
}

export default PlayerForm