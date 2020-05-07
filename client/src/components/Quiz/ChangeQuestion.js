import React from 'react';

const ChangeQuestion = (props) => {

    const { nextQuestion } = props; 

    return (<button onClick={nextQuestion} >Next Question </button>)
};

export default ChangeQuestion;