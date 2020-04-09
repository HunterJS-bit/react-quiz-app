import React from 'react';
import Card from './Card';

const CardList = ({ history }) => {

	console.log('history', history);
	const goToPage = (index) => {
		history.push(`/category/${index}`);
	};

	return (
		<div className='cardList'>
			{[...Array(10)].map((e, i) => {
				return <Card key={i} index={i} navigate={goToPage}></Card>;
			})}
		</div>
	);
};

export default CardList;
