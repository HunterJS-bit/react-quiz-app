import React, { useState, useEffect } from 'react';
import Checkbox from './Checkbox';

function Quiz(props) {
	const { questions } = props;
	const { options, answers, question } = questions;

	console.log('quessss', answers);


	const [checkboxState, setCheckbox] = useState({});

	useEffect(() => {
		const initState = options.map((e, index) => {
			return {
				[`check-${index}`]: false,
			};
		});
		setCheckbox(initState);
	}, [props.questions]);

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
		return options.map((label, index) => {
			return (
				<Checkbox
					onChange={handleChange}
					key={index}
					name={`check-${index}`}
					checked={checkboxState[`check-${index}`]}
					label={label}
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
