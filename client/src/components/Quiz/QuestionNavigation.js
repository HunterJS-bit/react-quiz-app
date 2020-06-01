import React from 'react';
import CheckQuestionAnswers from './CheckQuestionAnswers';
import ChangeQuestion from './ChangeQuestion';
import { useHistory } from 'react-router-dom';

const QuestionNavigation = (props) => {
    const { answerSubmited, userAnswers, correctAnswers, setFormState, nextQuestion, points, currentIndex, totalQuestions } = props;
    
    const history = useHistory();

    const goToResult = () => {
        history.push('/result');
    }
    console.log()

    if (answerSubmited && currentIndex === totalQuestions) {
        return <button onClick={goToResult}>Proverite Rezultat</button>;
    } else if (answerSubmited) {
        return <ChangeQuestion nextQuestion={nextQuestion}></ChangeQuestion>
    } else {
        return <CheckQuestionAnswers 
                    points={points}
                    userAnswers={userAnswers} 
                    correctAnswers={correctAnswers}
                    setFormState={setFormState}>
                </CheckQuestionAnswers>
    }

};

export default QuestionNavigation;