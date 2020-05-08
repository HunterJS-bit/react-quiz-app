import React from 'react';
import { useHistory } from 'react-router-dom';

const QuizCard = (props) => {

    const { quiz } = props;

    const history = useHistory();
    
    const goToQuestions = () => {
        history.push(`/quiz/${quiz.slug}`, quiz);
    }; 

    return (<div className="card card-1" onClick={goToQuestions}>
                <p>{ quiz.name }</p>
            </div>);
};

export default QuizCard;