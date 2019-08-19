import React, { Component } from "react";
import { Button, FormGroup, Label, Input, Alert  } from 'reactstrap';
import "../styles/login.css";
import { Link } from 'react-router-dom';
// import { register } from "../actions/index"; //action to login

// function mapDispatchToProps(dispatch) {
//   return {
//     register: status => dispatch(register(status))
//   };
// }


class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirm_password:""
    
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0 && this.state.password===this.state.confirm_password;
  }

  handleChange(event){
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit=(event) =>{

    event.preventDefault();
    //this.setState({submited:true})

    let postData = {
      username: this.state.email,
      password: this.state.password
     
    };

    this.props.register(postData);
    
  }

  render() {
    
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Alert color="danger" hidden={!this.state.login_error}>
            The credentials provided for registration already exists with us.Kindly choose another combination
          </Alert>
        </FormGroup>
        <FormGroup>
          <Label for="username">Email</Label>
          <Input type="text" name="email" id="email"  value={this.state.email} onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password"  value={this.state.password} onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for="password">Confirm Password</Label>
          <Input type="password" name="confirm_password" id="confirm_password"  value={this.state.confirm_password} onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
        <Button color="primary" block  disabled={!this.validateForm()} type="submit">
            Register
        </Button>
        </FormGroup>

        <FormGroup>
           <Link to="/">Back</Link> to login
        </FormGroup>
        </form>
      </div>
    );
  }
}

export default Register;