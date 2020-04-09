import React from 'react';

const Card = (props) => {
	const { index, navigate } = props;

	return (
		<div className='card card-1' onClick={() => navigate(index + 1)}>
			<h1> Test {index} </h1>
		</div>
	);
};

export default Card;
