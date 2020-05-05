import React from 'react';
import { useSelector } from 'react-redux';

const QuizResult = () => {

    const finalResult = useSelector(state => state.quiz.result);
    

    return (<div>
            <h1>Showing results</h1>
            <p>Total score is { finalResult }</p>
        </div>);
}


export default QuizResult;