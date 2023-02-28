import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const [type, setType] = useState("");

    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
        navigate(`/contact/${type}`)
    }

  return (
    <div>
        <form action="" className="col-md-3 mx-auto" onSubmit={submitHandler}>
            <div className="form-group col-m-3">
                <label name="type" className="form-label">Please type in how you would like to connect:</label>
                <input type="text" className="form-control col-md-3" value={type} onChange={(e) => setType(e.target.value)} />
            </div>
            <button className="btn btn-info mt-3">Submit</button>

        </form>
        
    </div>
  )
}

export default Form