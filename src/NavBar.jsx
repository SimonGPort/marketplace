import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  handleLogout = async () => {
    const response = await fetch("/logout", { method: "POST" });
    const body = await response.text();
    const parsed = JSON.parse(body);
    if (parsed.success) {
      console.log("dispatch logout");
      this.props.dispatch({ type: "logout", login: false });
    }
  };

  render = () => {
    if (this.props.login === false) {
      return (
        <>
          <div>
            <Link to="/register">
              <button>Register</button>
            </Link>
            or
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
          <div>
            <Link to="/Sell">
              <button>Sell</button>
            </Link>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div>
            <Link to="/checkout">
              <button>Checkout</button>
            </Link>
            <Link to="/">
              <button onClick={this.handleLogout}>Logout</button>
            </Link>
          </div>
          <div>
            <Link to="/Sell">
              <button>Sell</button>
            </Link>
          </div>
        </>
      );
    }
  };
}

export default connect()(NavBar);
