import React, { useState } from 'react'

export default function QuizNavBar({ questions }) {
	const [questionIndex, setQuestionIndex] = useState(0)

	// define event handlers

	// determine if on the first question or not

	const onLastQuestion = questionIndex === questions.length - 1

	return (
		<nav>
			<span>Question #{questionIndex + 1}</span>
			<div>
				<button onClick={goBack}>Go Back</button>
				<button disabled={onLastQuestion}>Next Question</button>
			</div>
		</nav>
	)
}
