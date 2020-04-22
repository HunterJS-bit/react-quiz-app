import React, { useEffect, useState } from 'react';
import Card from './Card';
import { axiosInstance } from "../util/axios";

const CardList = ({ history }) => {

	const [categoryList, setCategoryList] = useState([]);

	const goToPage = (category) => {
		console.log('hererer', category);
		const name = category.name;
		history.push(
			`/category/${name}/quizList`,
			category);
	};

	useEffect(() => {
		console.log('inside use effect');
		const fetchData = async () => {
			const response = await axiosInstance.get('/category/main');
			setCategoryList(response.data);
		}
		fetchData();
	}, [])

	return (
		<div className='cardList'>
			{categoryList.map((cat, i) => {
				return <Card key={i} index={i + 1} category={cat} navigate={goToPage}></Card>;
			})}
		</div>
	);
};

export default CardList;
