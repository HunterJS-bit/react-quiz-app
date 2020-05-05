import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from './Checkbox';
import QuizImage from './QuestionImage';

function Quiz(props) {
	const { questions } = props;
	const { options, answers, question, image, points } = questions;

	const [checkboxState, setCheckbox] = useState({});
	const dispatch = useDispatch();

	const finalResult = useSelector(state => state.quiz.result);

	console.log('Final ', finalResult);

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
			return arr1.every(item => arr2.includes(item)) 
		}
	};
	const checkAnswers = (e) => {
		e.preventDefault();
		const atLeastOne = Object.values(checkboxState).some(e => !!e);
		if (atLeastOne) {
		
			if (IfMultiAnswer()) {
				const userAnswers = Object.entries(checkboxState).reduce(function(filtered, option, index) {
					if (option[1]) {
					   filtered.push(index);
					}
					return filtered;
				}, []);

				const result = isEqual(userAnswers, answers);
				console.log(result);
				if (result) {
					alert('Correct');
					dispatch({ type: 'UPDATE_SCORE', points: points });
				} else {
					alert('Not correct');
				}

			} else {
				const userAnswer = parseInt(Object.keys(checkboxState)[0].slice(-1));
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
