import React from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import carLogo from '../../assets/car.svg';
import motoLogo from '../../assets/motor.svg';
import truckLogo from '../../assets/deliver.svg';


const StyledButton = styled(Button)`
	margin: 30px;
	min-width: 152px;
`;

const StyledPaper = styled(Paper)`
padding:  padding: 20px 0px;
text-align: left;
color: ${props => props.theme.palette.text.secondary};
`;

const Boxed = styled.div`

`;

const CategoryCard = (props) => {
	const { navigate, category } = props;

	const { name } = category;

	const imageSrc = '';

	const getImageSrc = (catName) => {
		switch (catName) {
			case 'A kategorija':
			  return motoLogo;
			case 'B kategorija':
			  return carLogo;
			case 'C kategorija':
			  return truckLogo;
			default:
			  return null;
		}
	}

	return (
		<Grid item xs={12} md={4} onClick={() => navigate(category)}>
		<StyledPaper >
			<Box display="flex" alignItems="center" justifyContent="space-around">
				<div className="category-image">
					<img src={getImageSrc(name)} />
				</div>
				<Boxed>
					<Typography
						style={{ textTransform: "uppercase", color: '#0d47a1' }}
						gutterBottom
					>
						{ name }
					</Typography>
					<Typography variant="body2" gutterBottom>
						A first title style <br /> with two lines
					</Typography>
				</Boxed>
			</Box>


		  <div style={{ display: "flex", justifyContent: "flex-end" }}>
			<StyledButton
			  color="primary"
			  variant="contained"
			 
			>
			  Learn more
			</StyledButton>
		  </div>
		</StyledPaper>
	  </Grid>
	);
};

export default CategoryCard;