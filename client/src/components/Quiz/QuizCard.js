import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
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

    return ( <Card className={classes.root} onClick={goToQuestions}>
                 <CardHeader
                        title={ quiz.name }
                    />
            </Card>);
};

export default QuizCard;