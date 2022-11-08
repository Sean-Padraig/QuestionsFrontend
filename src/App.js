import './App.css';
import React, { useState }  from 'react';
import Questions from './Components/Questions';
import Output from './Components/Output';
import {
  Route,
  Routes,
  BrowserRouter,
  Link,
} from "react-router-dom";
//import Login from './Components/Login';

function App() {
  // React States

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info


  const database = [
    {
      username: "user1",
    },
    {
      username: "user2",
    }
  ];

  const errors = {
    uname: "invalid username",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.username !== uname.value) {
        // Invalid 
        setErrorMessages({ name: "uname", message: errors.uname });
      } else {
        setIsSubmitted(true);
      }
    } 
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Login with Email </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Create User</label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
    
  );

  return (
    <React.Fragment>
     <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>
          <p>User is successfully logged in</p>
          <br></br>
          <button>
            <Link to="/question">Continue</Link>
          </button>
          </div> : renderForm}
      </div>
  </div>

    <BrowserRouter>
          <Routes>
            <Route path="questions" 
            element={<Questions></Questions>}></Route>      
            <Route path="output" 
            element={<Output></Output>}></Route>
            </Routes>
        </BrowserRouter>
    </React.Fragment>
    
  );
}

export default App;
