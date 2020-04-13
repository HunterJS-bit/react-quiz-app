import React, { useState } from 'react';
import Quiz from './Quiz';
import questions from '../data/data';

const QuizWrapper = () => {
	const [qIndex, setIndex] = useState(0);
	const question = questions[qIndex];
	const totalQuestions = questions.length;

	const changeQuestion = () => {
		setIndex((prev) => {
			return prev + 1;
		});
	};

	return (
		<div className='quiz'>
			<h2>quiz wrapper </h2>
			<p>
				{qIndex + 1} / {totalQuestions}
			</p>
			<Quiz questions={question} />
			<button onClick={changeQuestion}> Sledece pitanje</button>
		</div>
	);
};

export default QuizWrapper;
