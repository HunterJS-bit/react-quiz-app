import React from 'react';

const ChangeQuestion = (props) => {

    const { nextQuestion } = props; 

    console.log('propovi', props);

    return (<button onClick={nextQuestion} >Next Question </button>)
};

export default ChangeQuestion;