import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../util/axios';
import QuizWrapper from '../Quiz/QuizWrapper';


const QuestionList = (props) => {


    const { location } = props;
    const id = location.state['_id'];
    const [questions, setQuestions ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axiosInstance.get(`quiz/${id}`);
            const { questions } = result.data;
            console.log('eheej', questions);
            setQuestions(questions);
        }
        fetchData();
    }, [])

    const renderComponent = () => {
        if (questions.length > 0) {

            return <QuizWrapper questions={questions}></QuizWrapper>
        }
        return <p>Loading ....</p>
    }

    return (<div className="quiz-wrapper">
            { renderComponent() }
        </div>);
};

export default QuestionList;