import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../util/axios';

const QuestionList = (props) => {


    const { location } = props;
    const id = location.state['_id'];
    const [questions, setQuestions ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axiosInstance.get(`question/${id}`);
            setQuestions(result.data);
        }
        fetchData();
    }, [])

    return (<p>This is list of questionssss </p>);
};

export default QuestionList;