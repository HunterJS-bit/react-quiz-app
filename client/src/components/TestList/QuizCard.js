import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import bike from '../../assets/motor.svg';
import truck from '../../assets/deliver.svg';
import car from '../../assets/car2.svg';
import Button from '@material-ui/core/Button';


const StyledCard = styled(Card)`
  overflow: visible;
`;

const StyledAvatar = styled(Avatar)`
  width: 120px;
  height: 120px;
  display: inline-block;
  padding: 5px;
  margin-top: -2.8em;
  border: 3px solid #fbb233;
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
    <StyledCard container className="featuredItem2">
      <StyledAvatar alt="Remy Sharp" src={getCategoryImage(category)} />
      <CardContent>
        <Typography variant="h6" gutterBottom> {quiz.name} </Typography>
        <Typography variant="body2" component="p">
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"
                  </Typography>
      </CardContent>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Button variant="outlined" fullWidth className="rounded" onClick={goToListQuestions}>Lista Pitanja </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button variant="contained" color="primary" className="rounded" fullWidth onClick={goToQuestions}>Do quiz </Button>
        </Grid>
      </Grid>
    </StyledCard>
  </Grid>);
};

export default QuizCard;