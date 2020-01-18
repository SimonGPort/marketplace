import React, { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    if (this.props.login === false) {
      return (
        <div>
          <button>Register</button> or
          <button>Login</button>
        </div>
      );
    } else {
      return (
        <div>
          <button>Checkout</button>
          <button>Logout</button>
        </div>
      );
    }
  };
}

export default NavBar;
