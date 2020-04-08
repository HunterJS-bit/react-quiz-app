import React, { useState } from 'react';
import Checkbox from './Checkbox';

const checkboxes = [
	{
		name: 'check-1',
		key: 'checkBox1',
		label: 'униформисани комунални полицајци:',
	},
	{
		name: 'check-2',
		key: 'checkBox2',
		label: 'униформисани полицијски службеници:',
	},
	{
		name: 'check-3',
		key: 'checkBox3',
		label: 'инспектори за друмски саобраћај:',
	},
];

const answer = 1;

function Quiz(props) {

	const [checkboxState, setCheckbox] = useState({ 'check-1': false,  'check-2': false,  'check-3': false });

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
		const correctAnswer = checkboxes[answer];
		if (checkboxState.hasOwnProperty(correctAnswer.name)) {
			console.log('correct');
		} else {
			console.log('not correct');
		}
	};

	const buildCheckbox = (checkboxList) => {
		return checkboxList.map((e) => {
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
				Непосредно регулисање саобраћаја на путевима врше:
			</h3>
			<div className='answers'>
				<form onSubmit={handleSubmit}>
					{buildCheckbox(checkboxes)}
					<input type='submit' value='Check answer' />
				</form>
			</div>
		</div>
	);
}

export default Quiz;
