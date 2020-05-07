import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Checkbox from './Checkbox';
import QuizImage from './QuestionImage';
import QuestionInfo from './QuestionInfo';

function Quiz(props) {
	const { questions } = props;
	const { options, answers, question, image, points } = questions;

	const [checkboxState, setCheckbox] = useState({});
	const [fieldset, setFieldset] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		// todo check logic later
		const initState = props.questions.options.reduce((a,b, index)=> (a[`${index}`]=false,a),{});
		setCheckbox(initState);
		setFieldset(false);
	}, [props.questions]);

	const handleChange = (e) => {
		const target = e.target;
		const name = target.name;
		const value = target.checked;
		if (answers.length > 1) {
			setCheckbox((prevState) => {
				return {
					...prevState,
					[name]: value,
				}
			})
		} else {
			setCheckbox({
				[name]: value,
			});
		}
	};


	const IfMultiAnswer = () => {
		return answers.length > 1;
	}

	const isEqual = (arr1, arr2) => {
		if (arr1.length !== arr2.length) {
			return false;
		} else {
			return arr1.every(item => arr2.includes(item)) 
		}
	};
	const checkAnswers = (e) => {
		e.preventDefault();
		const atLeastOne = Object.values(checkboxState).some(e => !!e);
		if (atLeastOne) {
			setFieldset(true); // disable all fields
		
			if (IfMultiAnswer()) {
				// todo maybe simplify this 
				const userAnswers = Object.entries(checkboxState).reduce(function(filtered, option, index) {
					if (option[1]) {
					   filtered.push(index);
					}
					return filtered;
				}, []);

				const result = isEqual(userAnswers, answers);
				if (result) {
					alert('Correct');
					dispatch({ type: 'UPDATE_SCORE', points: points });
				} else {
					alert('Not correct');
				}

			} else {
				const userAnswer = parseInt(Object.keys(checkboxState));
				const correctAnswer = answers[0];
				if (userAnswer !== correctAnswer) {
					alert('Not correct');
				} else {
					alert('Correct');
					dispatch({ type: 'UPDATE_SCORE', points: points });
				}
			}

		} else {
			alert('Chooose at least one answer');
		}
	};

	const buildCheckbox = () => {
		return options.map((label, index) => {
			return (
				<div key={index}>
					<Checkbox
						onChange={handleChange}
						name={`${index}`}
						checked={checkboxState[`${index}`]}
						label={label}
					/>
					<div className="correct">
						<span>Y</span><span>X</span>
					</div>
				</div>
			);
		});
	};

	return (
		<div className='quiz-wrapper'>
			<h3 className='question'>{question}</h3>
			<QuestionInfo info={answers}></QuestionInfo>
			<QuizImage image={image}></QuizImage>
			<div className='answers'>
				<form onSubmit={checkAnswers}>
					<fieldset disabled={fieldset}>
						{buildCheckbox()}
						<input type='submit' value='Check answer' />
					</fieldset>
				</form>
			</div>
		</div>
	);
}

export default Quiz;
