import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book.jsx";

class BuyCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemToBuy: []
    };
  }

  componentDidMount() {
    this.fetchItem();
  }

  fetchItem = async () => {
    let buyCategory = window.location.pathname;
    console.log("/itemToBuy" + buyCategory);
    let response = await fetch("/itemToBuy" + buyCategory, { method: "POST" });
    let body = await response.text();
    body = JSON.parse(body);
    console.log("/fetchItem bodyresponse", body);
    this.setState({ itemToBuy: body });
  };

  render = () => {
    let buyCategory = window.location.pathname;
    return (
      <>
        <div>{buyCategory} category</div>
        {this.state.itemToBuy.map((book, index) => {
          return (
            <Book
              key={index}
              seller={book.seller}
              title={book.title}
              description={book.description}
              img={book.img}
              price={book.price}
              id={book._id}
            />
          );
        })}
        <div>
          <Link to="/">
            <button>Go back to the categories</button>
          </Link>
        </div>
      </>
    );
  };
}

export default BuyCategory;
