import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const [type, setType] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/contact/${type}`);
    }

  return (
    <div>
        <form action="" className="col-md-3 mx-auto" onSubmit={submitHandler}>
            <div className="form-group">
                <label className="form-label" htmlFor="name">Contact Type</label>
                <input type="text" className="form-control" id="name" onChange={(e) => setType(e.target.value)}/>
            </div>
            <button className="btn btn-info">Submit</button>
        </form>
    </div>
  )
}

export default Form