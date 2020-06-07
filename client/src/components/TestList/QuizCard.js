import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }));

const QuizCard = (props) => {

    const { quiz } = props;

    const classes = useStyles();

    const history = useHistory();
    
    const goToQuestions = () => {
        history.push(`/quiz/${quiz.slug}`, quiz);
    }; 

    return ( 
           <Grid item xs={3} md={3}>
               <Grid container className="featuredItem2">
               { quiz.name }
               
               </Grid>
            </Grid>);
};

export default QuizCard;