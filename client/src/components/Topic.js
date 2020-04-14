import React, { useEffect } from "react";
import QuizWrapper from './QuizWrapper';
import { axiosInstance } from '../util/axios';

const Topic = (props) => {
	const id = props.match.params.id;

	async function fetchMyAPI() {
		let response = await axiosInstance('question/1');
		console.log('radim fetch');
		console.log(response);
	}

	useEffect(function(){
		fetchMyAPI().then(r => {
			console.log('done');
		});
	}, []);

	return (
		<div className='quiz-1'>
			<h1>herere is topic {id}</h1>
			<QuizWrapper />
		</div>
	);
};

export default Topic;
