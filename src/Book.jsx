import React, { Component } from "react";
import { connect } from "react-redux";

class Book extends Component {
  constructor(props) {
    super(props);
  }
  addToCart = evt => {
    let thisItemToCart = {};
    thisItemToCart.name = this.props.title;
    thisItemToCart.price = this.props.price;
    thisItemToCart.seller = this.props.seller;
    thisItemToCart.id = this.props.id;
    this.props.dispatch({
      type: "addToCart",
      addToCart: thisItemToCart
    });
    // this.setState({ itemAddedToCart: true });
  };
  render = () => {
    return (
      <div className="card">
        <div>
          <img src={this.props.img} />
        </div>
        <div>
          <div>{this.props.title}</div>
          <div>Description: {this.props.description}</div>
          <div>Seller: {this.props.seller}</div>
          <div>Price: {this.props.price}$</div>
          {this.props.itemAddedToCart.some(
            book => book.id === this.props.id
          ) ? (
            <div>This item is in the cart</div>
          ) : (
            <button onClick={this.addToCart}>Add to cart</button>
          )}
        </div>
      </div>
    );
  };
}

let mapStateToProps = st => {
  return {
    itemAddedToCart: st.cart
  };
};

export default connect(mapStateToProps)(Book);
