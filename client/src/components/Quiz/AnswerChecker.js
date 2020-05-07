import React from 'react';


const AnswerChecker = (props) => {

    const { visible, index, state, answers } = props;


    const compareAnswers = (index) => {
        console.log(state[index]);
        console.log(answers);
        if (state[index] && answers.includes(index)) {
            return '\u2713';
        } else if (state[index] && !answers.includes(index)) {
            return '\u274C';
        } else if (!state[index] && answers.includes(index)) {
            return '\u2713';
        }
        return '';
    };

    if (visible) {
    return (<p>{ compareAnswers(index)}</p>);
    }

    return null;
};

export default AnswerChecker;