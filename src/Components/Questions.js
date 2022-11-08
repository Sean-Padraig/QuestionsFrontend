import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Questions() {
  return (
    <form className="question">
      <div>
        <div className="login-form">
          <select typeof="asking">
            <option>--Question 1--</option>
          </select>
        </div>
      </div>
      <br></br>
      <div>
        <div className="login-form">
          <select typeof="asking">
            <option>--Question 2--</option>
          </select>
        </div>
      </div>
      <br></br>
      <div>
        <div className="login-form">
          <select typeof="asking">
            <option>--Question 3--</option>
          </select>
          </div>
          <div className="button-container">
            <button >
              <Link to="/output">Check</Link>
            </button>
        </div>
      </div>
    </form>
  );
};

export default Questions;
