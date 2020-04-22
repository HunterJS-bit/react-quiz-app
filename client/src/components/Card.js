import React from 'react';

const Card = (props) => {
	const { navigate, category } = props;

	const { name, _id: id } = category;

	return (
		<div className='card card-1' onClick={() => navigate(category)}>
			<h1> { name }</h1>
		</div>
	);
};

export default Card;
