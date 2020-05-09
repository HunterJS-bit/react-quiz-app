import React from 'react';
import { useSelector } from 'react-redux';

const QuizResult = () => {

    const { userScore, maxPoints } = useSelector(state => state.quiz);

    const percentage = ((100 * userScore) / maxPoints).toFixed(0);

    return (<div>
            <h1>Showing results</h1>
            <p>You scored {percentage}%</p>
            <button>Review </button>
        </div>);
}


export default QuizResult;