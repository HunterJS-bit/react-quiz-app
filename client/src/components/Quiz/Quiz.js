import React, { useState, useEffect } from 'react';
import Checkbox from './Checkbox';

function Quiz(props) {
	const { questions } = props;
	const { options, answers, question } = questions;

	const [checkboxState, setCheckbox] = useState({});

	const showAdditionalInfo = () => {
		if (answers.length > 1) {
		return <p>{answers.length} odgovora je tacno </p>
		}
	}

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

	const checkAnswers = (e) => {
		e.preventDefault();
		console.log(checkboxState);
		console.log(answers);
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
			{ showAdditionalInfo() }
			<div className='answers'>
				<form onSubmit={checkAnswers}>
					{buildCheckbox()}
					<input type='submit' value='Check answer' />
				</form>
			</div>
		</div>
	);
}

export default Quiz;
