import React, { useState } from 'react';
import Quiz from './Quiz';
import LinearProgress from '@material-ui/core/LinearProgress';

const QuizWrapper = (props) => {
	const { questions } = props;
	const [questionIndex, setIndex] = useState(0);
	const [completed, setCompleted] = useState(1);
	const question = questions[questionIndex];
	const totalQuestions = questions.length;
	const percentage = 100 / totalQuestions;

	const changeQuestion = () => {
		setIndex((prev) => {
			return prev + 1;
		});
		setCompleted((prev) => {
			return prev + percentage;
		});
	};



	return (
		<div className='quiz'>
			<LinearProgress variant="determinate" value={completed} />
			<p>
				{questionIndex + 1} / {totalQuestions}
			</p>
			<Quiz questions={question} 
				  changeQuestion={changeQuestion} 
				  currentIndex={questionIndex+1}  />
		</div>
	);
};

export default QuizWrapper;
