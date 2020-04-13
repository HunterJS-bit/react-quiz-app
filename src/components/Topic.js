import React from 'react';
import QuizWrapper from './QuizWrapper';

const Topic = (props) => {
	const id = props.match.params.id;

	return (
		<div className='quiz-1'>
			<h1>herere is topic {id}</h1>
			<QuizWrapper />
		</div>
	);
};

export default Topic;
