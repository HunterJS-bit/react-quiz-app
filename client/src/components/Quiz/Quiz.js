import React, { useState, useEffect } from 'react';
import Checkbox from './Checkbox';
import QuizImage from './QuestionImage';
import QuestionInfo from './QuestionInfo';
import AnswerChecker from './AnswerChecker';
import QuestionNavigation from './QuestionNavigation';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import styled from 'styled-components';


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
				// <div key={index}>
					<Checkbox
						key={index}
						onChange={handleChange}
						name={`${index}`}
						checked={checkboxState[`${index}`]}
						label={label}
					/>
					/*{ <AnswerChecker 
						index={index} 
						visible={formSubmited} 
						state={checkboxState} 
						answers={answers}>
					</AnswerChecker> } */
				// </div>
			);
		});
	};

	return (
		<div className='quiz-wrapper'>
			<Paper elevation={2} >
				<Box p={3}>
					<Typography variant="h5" className="question-header" component="h5">
						{question}
					</Typography>
					<QuestionInfo info={answers}></QuestionInfo>
					<QuizImage image={image}></QuizImage>
				</Box>
				<Divider />
				<Box p={2} mt={3} >
					<div className='answers'>
						<fieldset disabled={formSubmited}>
							<div className="question-options">
								{buildCheckbox()}
							</div>
						</fieldset>
					</div>
				</Box>
				<Box p={3} mt={2} >
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
				</Box>
			</Paper>
		</div>
	);
}

export default Quiz;
