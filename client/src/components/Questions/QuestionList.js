import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../util/axios';

const QuestionList = (props) => {


    const { location } = props;
    const id = location.state['_id'];
    const [questions, setQuestions ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axiosInstance.get(`quiz/${id}`);
            const { questions } = result.data;
            setQuestions(questions);
        }
        fetchData();
    }, [])

    return (<div className="quiz-wrapper">
            <p>This is list of questionssss </p>
        </div>);
};

export default QuestionList;