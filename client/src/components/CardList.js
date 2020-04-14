import React from 'react';
import Card from './Card';

const CardList = ({ history }) => {

	const goToPage = (index) => {
		history.push(`/category/${index}`);
	};

	return (
		<div className='cardList'>
			{[...Array(10)].map((e, i) => {
				return <Card key={i} index={i + 1} navigate={goToPage}></Card>;
			})}
		</div>
	);
};

export default CardList;
