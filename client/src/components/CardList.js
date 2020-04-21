import React, { useEffect, useState } from 'react';
import Card from './Card';
import { axiosInstance } from "../util/axios";

const CardList = ({ history }) => {

	const [categoryList, setCategoryList] = useState([]);

	const goToPage = (index) => {
		history.push(`/category/${index}`);
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
			{categoryList.map((e, i) => {
				return <Card key={i} index={i + 1} name={e.name} navigate={goToPage}></Card>;
			})}
		</div>
	);
};

export default CardList;
