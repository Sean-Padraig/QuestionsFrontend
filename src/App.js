import "./App.css";
import React, { useEffect, useState } from "react";
import {
	Route,
	Routes,
	BrowserRouter as Router,
	Link,
	useNavigate,
} from "react-router-dom";
import Questions from "./Components/Questions";
import Output from "./Components/Output";

function App() {
	// React States
	const [user, setUser] = useState(null);
	const [questions, setQuestions] = useState();
	const [errorMessages, setErrorMessages] = useState({});
	const [isSubmitted, setIsSubmitted] = useState(false);
	useEffect(() => {
		getQuestions();
	}, []);
	// User Login info
	const getQuestions = async () => {
		const data = await fetch("http://localhost:5243/question/all");
		const qData = await data.json();
		setQuestions(() => {
			console.log(qData);
			return qData;
		});
	};
	const postRegister = async user => {
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		};
		const data = await fetch("http://localhost:5243/login", options);
		const userData = await data.json();
		console.log(userData);
		return userData;
	};
	const database = [
		{
			username: "user1",
		},
		{
			username: "user2",
		},
	];

	const errors = {
		uname: "invalid username",
	};
	const handleLogin = e => {
		e.preventDefault();
		const userObject = Object.fromEntries(new FormData(e.target));

		console.log(userObject);
		postRegister(userObject);
	};
	const handleSubmit = event => {
		//Prevent page reload
		event.preventDefault();

		var { uname } = document.forms[0];

		// Find user login info
		const userData = database.find(user => user.username === uname.value);

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
	const renderErrorMessage = name =>
		name === errorMessages.name && (
			<div className="error">{errorMessages.message}</div>
		);

	// JSX code for login form
	const renderForm = (
		<div className="form">
			<form onSubmit={handleLogin}>
				<div className="input-container">
					<label>Login with Email </label>
					<input type="text" name="email" required />
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
			<Router>
				<div className="app">
					<div className="login-form">
						<div className="title">Sign In</div>
						{isSubmitted ? (
							<div>
								<p>User is successfully logged in</p>
								<br></br>
								<button>
									<Link to="/question">Continue</Link>
								</button>
							</div>
						) : (
							renderForm
						)}
					</div>
				</div>

				<Routes>
					<Route
						path="questions"
						element={<Questions questions={questions}></Questions>}
					></Route>

					<Route path="output" element={<Output></Output>}></Route>
				</Routes>
			</Router>
		</React.Fragment>
	);
}

export default App;
