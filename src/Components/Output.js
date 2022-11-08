import React from 'react'

function Output() {
  return (
    <form className="results">
      <h1>Results</h1>
      <div>
        <div className="login-form">
          <h2>Question 1</h2>
          <p>Correct Answer</p>
          <b>Your Answer</b>
        </div>
      </div>
      <div>
        <div className="login-form">
          <h2>Question 2</h2>
          <p>Correct Answer</p>
          <b>Your Answer</b>
        </div>
      </div>
      <div>
        <div className="login-form">
          <h2>Question 3</h2>
          <p>Correct Answer</p>
          <b>Your Answer</b>
        </div>
      </div>
      <br></br>
          <div className="button-container">
            <input type="submit" />
        </div>
      </form>
  )
}

export default Output