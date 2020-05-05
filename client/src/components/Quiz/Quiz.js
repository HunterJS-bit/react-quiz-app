import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Checkbox from './Checkbox';
import QuizImage from './QuestionImage';

function Quiz(props) {
	const { questions } = props;
	const { options, answers, question, image } = questions;

	const [checkboxState, setCheckbox] = useState({});
	const dispatch = useDispatch();

	const showAdditionalInfo = () => {
		if (answers.length > 1) {
			return <p>{answers.length} odgovora su tacna </p>
		}
	}

	useEffect(() => {
		// todo check logic later
		const initState = props.questions.options.reduce((a,b, index)=> (a[`check-${index}`]=false,a),{});
		setCheckbox(initState);
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
			return arr1.some(item => arr2.includes(item)) 
		}
	};
	const checkAnswers = (e) => {
		e.preventDefault();
		// const atLeastOne = Object.values(checkboxState).some(e => !!e);
		// if (atLeastOne) {
		
		// 	if (IfMultiAnswer()) {
		// 		var userAnswers = Object.entries(checkboxState).reduce(function(filtered, option, index) {
		// 			if (option[1]) {
		// 			   filtered.push(index);
		// 			}
		// 			return filtered;
		// 		  }, []);
		// 		const result = isEqual(userAnswers, answers);
		// 		if (result) {
		// 			alert('Correct');
		// 		} else {
		// 			alert('Not correct');
		// 		}

		// 	} else {
		// 		const userAnswer = parseInt(Object.keys(checkboxState)[0].slice(-1));
		// 		const correctAnswer = answers[0];
		// 		if (userAnswer !== correctAnswer) {
		// 			alert('Not correct');
		// 		} else {
		// 			alert('Correct');
		// 		}
		// 	}

		// } else {
		// 	alert('Chooose at least one answer');
		// }
		dispatch({ type: 'UPDATE_SCORE' });
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
			<QuizImage image={image}></QuizImage>
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
