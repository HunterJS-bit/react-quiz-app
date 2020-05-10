import React, { useState, useEffect } from 'react';
import Checkbox from './Checkbox';
import QuizImage from './QuestionImage';
import QuestionInfo from './QuestionInfo';
import AnswerChecker from './AnswerChecker';
import QuestionNavigation from './QuestionNavigation';
import Button from '@material-ui/core/Button';

function Quiz(props) {
	const { questions, changeQuestion, currentIndex, totalQuestions } = props;
	const { options, answers, question, image, points } = questions;

	const [checkboxState, setCheckbox] = useState({});
	const [formSubmited, setformSubmited] = useState(false);

	useEffect(() => {
		// todo check logic later
		const initState = props.questions.options.reduce((a,b, index)=> (a[`${index}`]=false,a),{});
		setCheckbox(initState);
		setformSubmited(false);
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

	const setFormState = (state) => {
		setformSubmited(state);
	}

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
					<AnswerChecker 
						index={index} 
						visible={formSubmited} 
						state={checkboxState} 
						answers={answers}>
					</AnswerChecker>
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
				<fieldset disabled={formSubmited}>
						{buildCheckbox()}
				</fieldset>
				<QuestionNavigation 
					currentIndex={currentIndex}
					totalQuestions={totalQuestions}
					points={points}
					nextQuestion={changeQuestion}
					answerSubmited={formSubmited}
					setFormState={setFormState}
					userAnswers={checkboxState} 
					correctAnswers={answers}>
				</QuestionNavigation>
			</div>
		</div>
	);
}

export default Quiz;
