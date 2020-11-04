import React from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import bike from '../../assets/motor.svg';
import truck from '../../assets/deliver.svg';
import car from '../../assets/car2.svg';
import Button from '@material-ui/core/Button';

const QuizCardWrapper = styled.div`
position: relative;
padding-bottom: 2.75rem;
padding-top: 75px;
&:after {
  background: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%);
  border-radius: 15px;
  box-shadow: 2px 0px 20px rgba(0, 0, 0, .1);
  bottom: 70px;
  content: '';
  left: -35px;
  position: absolute;
  right: 35px;
  top: 0;
}
`;


const QuizCardMain = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 2px 5px 25px rgba(0, 0, 0, .15);
  padding: 25px;
  padding-top: 50px;
  padding-bottom: 41px;
  position: relative;
  z-index: 2;
  text-align: left;
`;

const CardTitle = styled(Typography)`
font-size: 1.85rem;
font-weight: bold;
line-height: 1.1;
margin: 0;
margin-top: 20px;
padding-bottom: 0.5em;
`;

const CardSubtitle = styled(Typography)`
  color: hsl(210, 5%, 41%);
  font-size: 0.9rem;
  margin-top: .33rem;
`;

const CadButton = styled(Button)`
box-shadow: 0 5px 0 hsl(210, 5%, 55%);
border-radius: 0;
border-bottom-left-radius: 9px;
border-bottom-right-radius: 9px
`;

const QuizCard = (props) => {

  const { category, categoryId, quiz } = props;

  const history = useHistory();

  const goToQuestions = () => {
    history.push(`/quiz/${quiz.slug}`, quiz);
  };

  const goToListQuestions = () => {
    const nameOftest = quiz.slug;

    history.push({
      pathname: `/category/${nameOftest}/list`,
      state: { detail: quiz.slug, category: category }
    })
  }

  const getCategoryImage = (category) => {
    if (category === 'A kategorija') {
      return bike;
    } else if (category === 'B kategorija') {
      return car;
    } else if (category === 'C kategorija') {
      return truck;
    }
  }

  return (<Grid item xs={6} md={4}>
    <QuizCardWrapper>
      <QuizCardMain>
        <CardTitle variant='h3'>{category}</CardTitle>
        <CardSubtitle variant="body1"> A great place to start as it covers the basics of driving in CT. Each question comes with a hint and a detailed explanation.</CardSubtitle>
        <div className="cat-image">
          <Avatar src={getCategoryImage(category)}></Avatar>
        </div>
        <a ><span>32</span><small>Pitanja</small></a>
        <a><span>12</span><small>Minuta</small></a>
        <div className="bottom-buttons">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CadButton variant="contained" color="primary" disableElevation>Go To List</CadButton>
            </Grid>
            <Grid item xs={12} md={6}>
              <CadButton variant="contained" color="primary" disableElevation>Go To List</CadButton>
            </Grid>
          </Grid>
        </div>
      </QuizCardMain>
    </QuizCardWrapper>
  </Grid >);
};

export default QuizCard;