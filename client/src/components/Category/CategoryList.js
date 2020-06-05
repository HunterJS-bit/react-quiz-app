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
		<div className='categories'>
			<section class="page-banner bg-contain bg-bottom d-flex align-items-center">
				<Grid container spacing={3}>
					<Grid item xs={12} md={12}>
						<div class="container">
							<div class="banner-text">
								<span>Lista kategorija</span>
								<h2>Kategorije</h2>
							</div>
						</div>
					</Grid>
				</Grid>
			</section>
			<section id="choose-category">
				<div class="container">	
					<Grid container justify="center">
						<Grid item>
							<div class="previewSectionTitle">
								<p>Odaberite vasu kategoriju</p>
								<h2>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</h2>
							</div>
						</Grid>
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
			</section>
		</div>
	);
};

export default CategoryList;
