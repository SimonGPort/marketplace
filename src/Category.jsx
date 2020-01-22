import React, { Component } from "react";
import { Link } from "react-router-dom";

class Category extends Component {
  render = () => {
    return (
      <>
        <div>Book Categories</div>
        <div className="categorydiv">
          <div className="container">
            <Link to="/art">
              <div className="centered">Art</div>
              <img src="/images/Art.jpeg" className="category" />
            </Link>
          </div>
          <div className="container">
            <Link to="/business">
              <div className="centered">Business</div>
              <img src="/images/Business.jpg" className="category" />
            </Link>
          </div>
          <div className="container">
            <Link to="/health">
              <div className="centered">Heatlth Sciences</div>
              <img src="/images/Health.jpg" className="category" />
            </Link>
          </div>
          <div className="container">
            <Link to="/mathematics">
              <div className="centered">Mathematics</div>
              <img src="/images/Mathematics.jpeg" className="category" />
            </Link>
          </div>
          <div className="container">
            <Link to="/linguistic">
              <div className="centered">Linguistic</div>
              <img src="/images/Linguistic.jpg" className="category" />
            </Link>
          </div>
        </div>
        <div className="categorydiv">
          <div className="container">
            <Link to="/law">
              <div className="centered">Law</div>
              <img src="/images/Law.jpg" className="category" />
            </Link>
          </div>
          <div className="container">
            <Link to="/foodscience">
              <div className="centered">Food Science</div>
              <img src="/images/Food science.jpg" className="category" />
            </Link>
          </div>
          <div className="container">
            <Link to="/computerscience">
              <div className="centered">Computer Science</div>
              <img src="/images/Computer science.jpg" className="category" />
            </Link>
          </div>
          <div className="container">
            <Link to="/history">
              <div className="centered">History</div>
              <img src="/images/History.jpeg" className="category" />
            </Link>
          </div>
          <div className="container">
            <Link to="/politicalscience">
              <div className="centered">Political Science</div>
              <img src="/images/Political science.jpg" className="category" />
            </Link>
          </div>
        </div>
      </>
    );
  };
}

export default Category;
