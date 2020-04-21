import React from 'react';

const Card = (props) => {
	const { index, navigate, name } = props;

	return (
		<div className='card card-1' onClick={() => navigate(index)}>
			<h1> { name }</h1>
		</div>
	);
};

export default Card;
