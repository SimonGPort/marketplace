import React, { Component } from "react";
import { Link } from "react-router-dom";

class Category extends Component {
  render = () => {
    return (
      <>
        <div className="categorydiv">
          <Link to="/art">
            <img src="/images/Art.jpeg" className="category" />
          </Link>
          <Link to="/business">
            <img src="/images/Business.jpg" className="category" />
          </Link>
          <Link to="/health">
            <img src="/images/Health.jpg" className="category" />
          </Link>
          <Link to="/mathematics">
            <img src="/images/Mathematics.jpeg" className="category" />
          </Link>
          <Link to="/linguistic">
            <img src="/images/Linguistic.jpg" className="category" />
          </Link>
        </div>
        <div className="categorydiv">
          <Link to="/law">
            <img src="/images/Law.jpg" className="category" />
          </Link>
          <Link to="/foodscience">
            <img src="/images/Food science.jpg" className="category" />
          </Link>
          <Link to="/computerscience">
            <img src="/images/Computer science.jpg" className="category" />
          </Link>
          <Link to="/history">
            <img src="/images/History.jpeg" className="category" />
          </Link>
          <Link to="/politicalscience">
            <img src="/images/Political science.jpg" className="category" />
          </Link>
        </div>
      </>
    );
  };
}

export default Category;
