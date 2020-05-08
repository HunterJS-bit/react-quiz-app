import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../util/axios';
import QuizWrapper from '../Quiz/QuizWrapper';


const QuestionList = (props) => {


    const { location } = props;
    const id = location.state['_id'];
    const [questions, setQuestions] = useState([]);
    const [totalPoints, setTotalPoints] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axiosInstance.get(`quiz/${props.location.state['_id']}`);
            const { questions, totalPoints } = result.data;
            setQuestions(questions);
            setTotalPoints(totalPoints);
        }
        fetchData();
    }, [])

    const renderComponent = () => {
        if (questions.length > 0) {

            return <QuizWrapper questions={questions} totalPoints={totalPoints}></QuizWrapper>
        }
        return <p>Loading ....</p>
    }

    return (<div className="quiz-wrapper">
            { renderComponent() }
        </div>);
};

export default QuestionList;