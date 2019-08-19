import React, { Component } from "react";
import { Button, FormGroup, Label, Input, Alert  } from 'reactstrap';
import "../styles/login.css";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";  //connect to redux store
import { login } from "../actions/index"; //action to login



function mapDispatchToProps(dispatch) {
    return {
      login: status => dispatch(login(status))
    };
  }

  function mapStateToProps(state) {
    return {
      error: state.error
    };
  }

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
      
    
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange(event){
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit=(event) =>{

    event.preventDefault();

    ///dispatch action to login

    let postData = {
        username: this.state.username,
        password: this.state.password
       
      };

    this.props.login(postData);

    
    
  }

  render() {
    
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Alert color="danger" hidden={!this.state.error.status}>
            {this.state.error.message}
          </Alert>
        </FormGroup>
        <FormGroup>
          <Label for="username">Email</Label>
          <Input type="text" name="username" id="username" autoComplete="username"  value={this.state.email} onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" autoComplete="current-password"  value={this.state.password} onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
        <Button color="primary" block  disabled={!this.validateForm()} type="submit">
            Login
        </Button>
        </FormGroup>

        <FormGroup>
            Dont have a valid user account?..Please click <Link to="/register">here</Link>
        </FormGroup>
        
        </form>
      </div>
    );
  }
}


const Login_Form = connect(mapStateToProps, mapDispatchToProps)(Login);

export default Login_Form;