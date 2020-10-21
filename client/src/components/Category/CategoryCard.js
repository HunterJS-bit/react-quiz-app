import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import styled from 'styled-components';
import carLogo from '../../assets/car.svg';
import motoLogo from '../../assets/motor.svg';
import truckLogo from '../../assets/deliver.svg';

const CategoryWrapper = styled.div`
  background: #fff;
  text-align: center;
  box-shadow: 0 0 25px rgba(0,0,0,.05);
  padding: 30px 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: all .3s ease 0s;
  &:hover {
	transform: translateY(-4px);
    box-shadow: 0 10px 15px rgba(0,0,0,.03);
  }
`;

const CategoryIcon = styled(Grid)`
  height: 80px;
  width: 80px;
  line-height: 80px;
  border-radius: 50%;
  margin: auto auto 30px;
  background: #efefef;
`;

const CategoryName = styled(Typography)`
  font-size: 20px;
  color: #282828;
  font-weight: 500;
  line-height: 38px;
`;

const CategoryInfo = styled(Typography)`
	display: block;
	font-size: 15px;
	color: #767676;
	letter-spacing: 0;
	margin-bottom: 10px;
`;


const CategoryCard = (props) => {
	const { navigate, category } = props;

	const { name, description } = category;

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
			<CategoryWrapper>
				<CategoryIcon>
					<img src={getImageSrc(name)} alt="img" />
				</CategoryIcon>
				<CategoryName> 	{name} </CategoryName>
				<CategoryInfo>{description}</CategoryInfo>
			</CategoryWrapper>
		</Grid>
	);
};

export default CategoryCard;