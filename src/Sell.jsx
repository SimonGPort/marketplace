import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Sell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: "",
      description: "",
      imgFile: "",
      price: undefined
    };
  }

  titleInput = evt => {
    this.setState({ title: evt.target.value });
  };
  categoryInput = evt => {
    this.setState({ category: evt.target.value });
  };
  descristionInput = evt => {
    this.setState({ description: evt.target.value });
  };
  pictureInput = e => {
    this.setState({ imgFile: e.target.files[0] });
  };

  submitHandler = async evt => {
    evt.preventDefault();
    let data = new FormData();
    data.append("seller", this.props.user);
    data.append("title", this.state.title);
    data.append("category", this.state.category);
    data.append("description", this.state.description);
    data.append("imgFile", this.state.imgFile);
    data.append("price", this.state.price);
    let response = await fetch("/sellingABook", { method: "POST", body: data });
    let body = await response.text();
    // console.log("/sellingABook response", body);
    body = JSON.parse(body);
    if (body.success) {
      alert("your book is ready to be sold");
      this.props.history.push("/");
    } else {
      alert("error");
    }
  };

  render = () => {
    if (this.props.login === false) {
      return (
        <>
          <div>
            You need to login
            <Link to="/register">
              <button>Register</button>
            </Link>
            or
            <Link to="/Login">
              <button>Login</button>
            </Link>
          </div>
        </>
      );
    } else {
      return (
        <div>
          Hi {this.props.user}, which book would you like to sell?
          <form onSubmit={this.submitHandler}>
            <div>
              Title
              <input type="text" onChange={this.titleInput} />
            </div>
            <div>
              Category
              <select value={this.state.value} onChange={this.categoryInput}>
                <option>Art</option>
                <option>Mathematics</option>
                <option>Law</option>
                <option>language</option>
              </select>
            </div>
            <div>
              Description
              <input type="text" onChange={this.descristionInput} />
            </div>
            <div>
              Picture
              <input type="file" onChange={this.pictureInput} />
            </div>
            <div>
              Price
              <input
                type="number"
                max="1000"
                step="0.01"
                onChange={this.priceInput}
              />
            </div>
            <input type="submit" value="Sell now" />
          </form>
        </div>
      );
    }
  };
}
export default withRouter(connect()(Sell));
