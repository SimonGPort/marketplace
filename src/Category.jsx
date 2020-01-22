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
              <div class="centered">Art</div>
              <img src="/images/Art.jpeg" className="category" />
            </Link>
          </div>
          <div className="container">
            <Link to="/business">
              <div class="centered">Business</div>
              <img src="/images/Business.jpg" className="category" />
            </Link>
          </div>
          <div className="container">
            <Link to="/health">
              <div class="centered">Heatlth Sciences</div>
              <img src="/images/Health.jpg" className="category" />
            </Link>
          </div>
          <div className="container">
            <Link to="/mathematics">
              <div class="centered">Mathematics</div>
              <img src="/images/Mathematics.jpeg" className="category" />
            </Link>
          </div>
          <div className="container">
            <Link to="/linguistic">
              <div class="centered">Linguistic</div>
              <img src="/images/Linguistic.jpg" className="category" />
            </Link>
          </div>
        </div>
        <div className="categorydiv">
          <div className="container">
            <Link to="/law">
              <div class="centered">Law</div>
              <img src="/images/Law.jpg" className="category" />
            </Link>
          </div>
          <div className="container">
            <Link to="/foodscience">
              <div class="centered">Food Science</div>
              <img src="/images/Food science.jpg" className="category" />
            </Link>
          </div>
          <div className="container">
            <Link to="/computerscience">
              <div class="centered">Computer Science</div>
              <img src="/images/Computer science.jpg" className="category" />
            </Link>
          </div>
          <div className="container">
            <Link to="/history">
              <div class="centered">History</div>
              <img src="/images/History.jpeg" className="category" />
            </Link>
          </div>
          <div className="container">
            <Link to="/politicalscience">
              <div class="centered">Political Science</div>
              <img src="/images/Political science.jpg" className="category" />
            </Link>
          </div>
        </div>
      </>
    );
  };
}

export default Category;
