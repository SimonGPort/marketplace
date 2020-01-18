import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import store from "./store.js";
import { connect } from "react-redux";

class UnconnectedApp extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      // <BrowserRouter>
      <div>
        <NavBar
          cart={this.props.cart}
          login={this.props.login}
          user={this.props.user}
        />
      </div>
      // </BrowserRouter>;
    );
  };
}

let mapStateToProps = state => {
  return {
    cart: state.cart,
    user: state.user,
    login: state.login
  };
};
let App = connect(mapStateToProps)(UnconnectedApp);
export default App;
