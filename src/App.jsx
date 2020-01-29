import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import { connect } from "react-redux";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Category from "./Category.jsx";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Sell from "./Sell.jsx";
import BuyCategory from "./BuyCategory.jsx";

class UnconnectedApp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchSession();
  }

  fetchSession = async () => {
    console.log("After the first render");
    let response = await fetch("/autoLogin", { method: "POST" });
    let body = await response.text();
    body = JSON.parse(body);
    console.log("/autoLogin response", body);
    if (body.success) {
      this.props.dispatch({
        type: "signup",
        login: true,
        username: body.username
      });
    } else {
      console.log("no autologin");
    }
  };

  renderMainPage = () => {
    return (
      <div>
        <Category />
      </div>
    );
  };
  renderBuyCategoryPage = () => {
    return (
      <div>
        <BuyCategory />
      </div>
    );
  };
  renderSellPage = () => {
    return (
      <div>
        <Sell login={this.props.login} user={this.props.user} />
      </div>
    );
  };

  renderLoginPage = () => {
    return (
      <div>
        <Login />
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
          <Route exact={true} path="/" render={this.renderMainPage} />
          <Route
            exact={true}
            path="/register"
            render={this.renderRegisterPage}
          />
          <Route exact={true} path="/Login" render={this.renderLoginPage} />
          <Route exact={true} path="/Sell" render={this.renderSellPage} />
          <Route exact={true} path="/art" render={this.renderBuyCategoryPage} />
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
