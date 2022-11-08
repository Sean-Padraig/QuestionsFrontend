import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Questions({ questions }) {
	return (
		<form className="question">
			{questions &&
				questions.map(question => {
					return (
						<div>
							<div className="login-form">
								<h2>{question.questiontext}</h2>
								<select typeof="asking">
									{question.answer.map(answer => {
										return <option>{answer.option}</option>;
									})}
								</select>
							</div>
						</div>
					);
				})}

			<div className="button-container">
				<button>
					<Link to="/output">Check</Link>
				</button>
			</div>
		</form>
	);
}

export default Questions;
