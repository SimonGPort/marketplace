import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import { connect } from "react-redux";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Category from "./Category.jsx";
import Register from "./Register.jsx";

class UnconnectedApp extends Component {
  constructor(props) {
    super(props);
  }

  renderSellPage = () => {
    return (
      <div>
        <Category />
      </div>
    );
  };
  renderRegisterPage = routeProps => {
    return (
      <div>
        <Register history={routeProps.history} />
      </div>
    );
  };

  render = () => {
    return (
      <BrowserRouter>
        <div>
          <NavBar
            cart={this.props.cart}
            login={this.props.login}
            user={this.props.user}
          />
          <Route exact={true} path="/" render={this.renderSellPage} />
          <Route
            exact={true}
            path="/register"
            render={this.renderRegisterPage}
          />
        </div>
      </BrowserRouter>
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
