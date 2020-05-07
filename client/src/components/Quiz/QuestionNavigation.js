import React from 'react';
import CheckQuestionAnswers from './CheckQuestionAnswers';
import ChangeQuestion from './ChangeQuestion';

const QuestionNavigation = (props) => {
    const { answerSubmited, userAnswers, correctAnswers, setFormState, nextQuestion } = props;

    if (answerSubmited) {
        return <ChangeQuestion nextQuestion={nextQuestion}></ChangeQuestion>
    } else {
        return <CheckQuestionAnswers 
                    userAnswers={userAnswers} 
                    correctAnswers={correctAnswers}
                    setFormState={setFormState}>
                </CheckQuestionAnswers>
    }

};

export default QuestionNavigation;