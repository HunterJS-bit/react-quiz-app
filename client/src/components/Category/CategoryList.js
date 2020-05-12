import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import Grid from '@material-ui/core/Grid';
import { axiosInstance } from '../../util/axios';
import styled from 'styled-components';


const StyledGrid = styled(Grid)`
	width: 1200px;
	margin-top: 40px;
`;

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
			<Grid container justify="center">
				<StyledGrid
				spacing={4}
				alignItems="center"
				justify="center"
				container
				>
				{categoryList.map((cat, i) => {
					return <CategoryCard key={i} index={i + 1} category={cat} navigate={goToPage}></CategoryCard>;
				})}
				</StyledGrid>
			</Grid>
		</div>
	);
};

export default CategoryList;
