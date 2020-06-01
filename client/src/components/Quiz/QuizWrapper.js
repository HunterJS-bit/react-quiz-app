import React, { useState } from 'react';
import Quiz from './Quiz';
import LinearProgress from '@material-ui/core/LinearProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Box } from '@material-ui/core'
import Button from '@material-ui/core/Button';


import { CSSTransition, TransitionGroup, } from "react-transition-group";



const QuizWrapper = (props) => {
	const { questions } = props;
	const [questionIndex, setIndex] = useState(0);
	const [completed, setCompleted] = useState(1);
	const [showModal, hideModal] = useState(true);
	const question = questions[questionIndex];
	const totalQuestions = questions.length;
	const percentage = 100 / totalQuestions;

	const changeQuestion = () => {
		setIndex((prev) => {
			return prev + 1;
		});
		setCompleted((prev) => {
			return prev + percentage;
		});
	};

	const onHideModal = () => {
		hideModal(false);
	};


	return (
		// <TransitionGroup>
		// <CSSTransition  timeout={1000}>
		<div className='quiz'>
			<p>
				{questionIndex + 1} / {totalQuestions}
			</p>
			<Quiz questions={question}
				changeQuestion={changeQuestion}
				currentIndex={questionIndex + 1} />
			{/* <div class="circle-sb">
						I'm circular speech bubble
						<div class="dcircle"></div>
						<div class="dcircle1"></div>
						</div> */}
			<Dialog
				open={showModal}
				keepMounted
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<Box
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
				>
					<DialogTitle id="alert-dialog-slide-title"> Uputstvo</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-slide-description">
							Find correct answers for each question!
								</DialogContentText>
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/sdfsdfsdf.gif" />
					</DialogContent>
					<DialogActions>
						<Button variant="outlined" onClick={onHideModal} color="secondary">
							Let's play
								</Button>
					</DialogActions>
				</Box>

			</Dialog>
			<div className="progress-bar">
				<LinearProgress variant="determinate" value={completed} />
			</div>
		</div>
		// </CSSTransition>
		// 	</TransitionGroup>
	);
};

export default QuizWrapper;
