import React, { useState } from 'react';
import Checkbox from './Checkbox';

function Quiz(props) {
	const { questions } = props;
	const { options, answers, question } = questions;

	const [checkboxState, setCheckbox] = useState(
		options.map((e, index) => {
			return {
				[`check-${index}`]: false,
			};
		})
	);

	const handleChange = (e) => {
		const target = e.target;
		const name = target.name;
		const value = target.checked;
		setCheckbox({
			...checkboxState,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(checkboxState);
		// const correctAnswer = questions.options[answer];
		//
		// if (checkboxState.hasOwnProperty(correctAnswer.name)) {
		// 	console.log('correct');
		// } else {
		// 	console.log('not correct');
		// }
	};

	const buildCheckbox = () => {
		return options.map((e, index) => {
			return (
				<Checkbox
					onChange={handleChange}
					key={e.key}
					name={`check-${index}`}
					checked={checkboxState[`check-${index}`]}
					label={e.label}
				/>
			);
		});
	};

	return (
		<div className='quiz-wrapper'>
			<h3 className='question'>{question}</h3>
			<div className='answers'>
				<form onSubmit={handleSubmit}>
					{buildCheckbox()}
					<input type='submit' value='Check answer' />
				</form>
			</div>
		</div>
	);
}

export default Quiz;
