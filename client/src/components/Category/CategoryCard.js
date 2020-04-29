import React from 'react';

const CategoryCard = (props) => {
	const { navigate, category } = props;

	const { name } = category;

	return (
		<div className='card card-1' onClick={() => navigate(category)}>
			<h1> { name }</h1>
		</div>
	);
};

export default CategoryCard;