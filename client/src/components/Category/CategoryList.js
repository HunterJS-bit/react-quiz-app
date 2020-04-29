import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import { axiosInstance } from '../../util/axios';


const CategoryList = ({ history }) => {

	const [categoryList, setCategoryList] = useState([]);

	const goToPage = (category) => {
		const { slug } = category;
		history.push(
			`/category/${slug}`,
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
				return <CategoryCard key={i} index={i + 1} category={cat} navigate={goToPage}></CategoryCard>;
			})}
		</div>
	);
};

export default CategoryList;
