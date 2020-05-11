import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../util/axios';
import QuizWrapper from '../Quiz/QuizWrapper';
import { useDispatch } from 'react-redux'


const QuestionList = (props) => {


    const { location } = props;
    const id = location.state['_id'];
    const [questions, setQuestions] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axiosInstance.get(`quiz/${props.location.state['_id']}`);
            const { questions, totalPoints } = result.data;
            setQuestions(questions);
            dispatch({ type: 'SET_USER_SCORE', points: 0 });
            dispatch({ type: 'SET_MAX_POINTS', points: totalPoints });
        }
        fetchData();
    }, [])

    const renderComponent = () => {
        if (questions.length > 0) {

            return <QuizWrapper questions={questions}></QuizWrapper>
        }
        return <p>Loading ....</p>
    }

    return (<div>
            { renderComponent() }
        </div>);
};

export default QuestionList;