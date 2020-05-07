import React from 'react';
import { useDispatch } from 'react-redux';

const CheckQuestionAnswers = (props) => {

    const { userAnswers, correctAnswers, setFormState } = props;

    const isMultiAnswer = () => {
        return correctAnswers.length > 1;
    };

    const isUserMultiAnswerCorrect = (userA, correctA) => {
		if (userA.length !== correctA.length) {
			return false;
		} else {
			return userA.every(item => correctA.includes(item)) 
		}
    };
    
    const ifAtLeastOneSelected = () => {
        return Object.values(userAnswers).some(a => !!a);
    }

    const checkUserAnswer = () => {
        if (ifAtLeastOneSelected()) {
            if (isMultiAnswer()) {
                const correctAnswers = Object.entries(userAnswers).reduce(function(filtered, option, index) {
					if (option[1]) {
					   filtered.push(index);
					}
					return filtered;
                }, []);
                

				if (isUserMultiAnswerCorrect(userAnswers, correctAnswers)) {
					alert('Correct');
					// dispatch({ type: 'UPDATE_SCORE', points: points });
				} else {
					alert('Not correct');
				}


            } else {
                const userAnswer = parseInt(Object.keys(userAnswers));
                const correctAnswer = correctAnswers[0];
                if (userAnswer !== correctAnswer) {
					alert('Not correct');
				} else {
					alert('Correct');
					// dispatch({ type: 'UPDATE_SCORE', points: points });
				}
            }
            setFormState(true);
        } else {
            alert('choose at least one');
        }
    };

    return (<button onClick={checkUserAnswer}>Check answers</button>)
};

export default CheckQuestionAnswers;