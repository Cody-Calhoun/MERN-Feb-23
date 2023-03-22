import React, {Component} from "react";

class MovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            year: ""
        };
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.addNewMovie(this.state);
        this.setState({
            title: "",
            year: ""
        });
    }


    render(){
        return (
            <form onSubmit={this.submitHandler}>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" value={this.state.title} onChange={this.changeHandler}/>
                <label htmlFor="Year">Year:</label>
                <input type="text" name="year" value={this.state.year} onChange={this.changeHandler}/>
                <button type="submit" >Add</button>
            </form>
        );
    }   
}

export default MovieForm;