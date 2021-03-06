import React, { Component } from "react";
import { connect } from "react-redux";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  usernameChange = evt => {
    this.setState({ username: evt.target.value });
  };
  emailChange = evt => {
    this.setState({ email: evt.target.value });
  };
  passwordChange = evt => {
    this.setState({ password: evt.target.value });
  };

  submitHandler = async evt => {
    evt.preventDefault();
    console.log("username", this.state.username);
    console.log("email", this.state.email);
    console.log("password", this.state.password);
    let data = new FormData();
    data.append("username", this.state.username);
    data.append("email", this.state.email);
    data.append("password", this.state.password);
    let response = await fetch("/signup", { method: "POST", body: data });
    let body = await response.text();
    console.log("/register response", body);
    body = JSON.parse(body);
    if (body.success) {
      this.props.dispatch({
        type: "signup",
        login: true,
        username: this.state.usernameInput
      });
      this.props.history.push("/");
    } else {
      alert("error");
    }
  };

  render = () => {
    return (
      <>
        Sign up
        <form onSubmit={this.submitHandler}>
          <div>
            Username
            <input type="text" onChange={this.usernameChange} />
          </div>
          <div>
            Email
            <input type="text" onChange={this.emailChange} />
          </div>
          <div>
            Password
            <input type="text" onChange={this.passwordChange} />
          </div>
          <input type="submit" value="signup" />
        </form>
      </>
    );
  };
}

export default connect()(Register);
