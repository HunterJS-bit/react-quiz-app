import React from 'react';
import { Route } from 'react-router-dom';
import Topic from './Topic';

const Card = (props) => {
	const { index, navigate } = props;

	return (
		<div className='card card-1' onClick={() => navigate(index + 1)}>
			<h1> Test </h1>
		</div>
	);
};

export default Card;
