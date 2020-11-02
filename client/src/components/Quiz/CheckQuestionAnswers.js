import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CheckQuestionAnswers = (props) => {

    const { userAnswers, correctAnswers, setFormState, points } = props;

    const [state, setState] = useState({
        open: false,
        Transition: Fade,
        vertical: 'top',
        horizontal: 'center',
    });

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
                const checkedUserAnswers = Object.entries(userAnswers).reduce(function (filtered, option, index) {
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
            setState({ ...state, open: true })
        }
    };

    const handleClose = () => {
        setState({ ...state, open: false })
    };

    return (<div className="submit-answers">
        <Button
            color="secondary"
            onClick={checkUserAnswer}>
            Check answers
    </Button>
        <Snackbar
            anchorOrigin={{ vertical: state.vertical, horizontal: state.horizontal }}
            open={state.open}
            autoHideDuration={3000}
            onClose={handleClose}
            TransitionComponent={state.Transition}
            key={state.Transition.name}
        >
            <Alert onClose={handleClose} severity="info">Choose at least One Answer!</Alert>
        </Snackbar>
    </div>)
};

export default CheckQuestionAnswers;