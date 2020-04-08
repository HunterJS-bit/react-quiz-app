import React, { useState } from 'react';
import Checkbox from './Checkbox';

const answer = 1;

function Quiz(props) {

	const { questions } = props;
	console.log('evo ga prop', questions);
	const [checkboxState, setCheckbox] = useState({
		'check-1': false,
		'check-2': false,
		'check-3': false,
	});

	const handleChange = (e) => {
		const target = e.target;
		const name = target.name;
		const value = target.checked;
		setCheckbox({
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const correctAnswer = questions.options[answer];
		if (checkboxState.hasOwnProperty(correctAnswer.name)) {
			console.log('correct');
		} else {
			console.log('not correct');
		}
	};

	const buildCheckbox = () => {
		return questions.options.map((e) => {
			return (
				<Checkbox
					onChange={handleChange}
					key={e.key}
					name={e.name}
					checked={checkboxState[e.name]}
					label={e.label}
				/>
			);
		});
	};

	return (
		<div className='quiz-wrapper'>
			<h3 className='question'>
				{ questions.question }
			</h3>
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
