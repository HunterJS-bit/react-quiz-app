import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';

const CheckQuestionAnswers = (props) => {

    const { userAnswers, correctAnswers, setFormState, points } = props;

    const dispatch = useDispatch();

    const isMultiAnswer = () => {
        return correctAnswers.length > 1;
    };

    const isUserMultiAnswerCorrect = (correctA, userA) => {
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
                const checkedUserAnswers = Object.entries(userAnswers).reduce(function(filtered, option, index) {
					if (option[1]) {
					   filtered.push(index);
					}
					return filtered;
                }, []);

				if (isUserMultiAnswerCorrect(correctAnswers, checkedUserAnswers)) {
					alert('Correct');
					dispatch({ type: 'UPDATE_USER_SCORE', points: points });
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
					dispatch({ type: 'UPDATE_USER_SCORE', points: points });
				}
            }
            setFormState(true);
        } else {
            alert('choose at least one');
        }
    };

    return (<Button
        color="secondary"
        onClick={checkUserAnswer}>
       Check answers
      </Button>)
};

export default CheckQuestionAnswers;