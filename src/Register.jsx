import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
    
        constructor() {
          super();
          this.state = {
            usernameInput:"",
            emailInput:""
            passwordInput:""
          };
        }

        usernameChange = evt => {
          this.setState({ usernameInput: evt.target.value });
        };
        emailChange = evt => {
            this.setState({ emailInput: evt.target.value });
          };
        passwordChange = evt => {
          this.setState({ passwordInput: evt.target.value });
        };


        ///////Je suis rendu ICI 19 janvier, il faut faire un backend qui recoit le post register et un reducer qui recoit le dispatcher login!!!
        submitHandler = async evt => {
          evt.preventDefault();
          console.log('username', this.state.username);
          console.log('email', this.state.email);
          console.log('password', this.state.passwordInput);
          let data = new FormData();
          data.append('username', this.state.usernameInput);
          data.append('email', this.state.emailInput);
          data.append('password', this.state.passwordInput);
          let response = await fetch('/register', { method: 'POST', body: data });
          let body = await response.text();
          console.log('/register response', body);
          body = JSON.parse(body);
          if (body.success) {
            return(
                this.props.router.push('/');
            this.props.dispatch({ type: 'login', login: true });
            )
          }else{alert(error)}
        };

    render = () => {
      return (
<>
Sign up
        <form onSubmit={this.submitHandler}>
          Username
          <input type="text" onChange={this.usernameChange} /> 
          Email
          <input type="text" onChange={this.emailChange} /> 
          Password
          <input type="text" onChange={this.passwordChange} />
          <input type="submit" value="login" />
        </form>
      </>
      )}


      export default Register;
