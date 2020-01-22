import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    if (this.props.login === false) {
      return (
        <div>
          <Link to="/register">
            <button>Register</button>
          </Link>
          or
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/checkout">
            <button>Checkout</button>
          </Link>
          <Link to="/">
            <button>Logout</button>
          </Link>
        </div>
      );
    }
  };
}

export default NavBar;
