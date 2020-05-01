import React, { useState } from 'react';
import Quiz from './Quiz';

const QuizWrapper = (props) => {
	const { questions } = props;
	const [qIndex, setIndex] = useState(0);
	const question = questions[qIndex];
	const totalQuestions = questions.length;

	const changeQuestion = () => {
		setIndex((prev) => {
			return prev + 1;
		});
	};

	const showResult = () => {
		console.log('show rezult');
	};

	return (
		<div className='quiz'>
			<h2>quiz wrapper </h2>
			<p>
				{qIndex + 1} / {totalQuestions}
			</p>
			<Quiz questions={question} />
			{qIndex + 1 < totalQuestions ? (
				<button onClick={changeQuestion}> Sledece pitanje</button>
			) : (
				<button onClick={showResult}> Prikazi Rezultat </button>
			)}
		</div>
	);
};

export default QuizWrapper;