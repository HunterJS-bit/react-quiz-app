import React, { useState } from 'react';
import Quiz from './Quiz';

const QuizWrapper = (props) => {
	const { questions, totalPoints } = props;
	const [questionIndex, setIndex] = useState(0);
	const question = questions[questionIndex];
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
				{questionIndex + 1} / {totalQuestions}
			</p>
			<Quiz questions={question} changeQuestion={changeQuestion} currentIndex={questionIndex+1} totalQuestions={totalQuestions} />
		</div>
	);
};

export default QuizWrapper;
