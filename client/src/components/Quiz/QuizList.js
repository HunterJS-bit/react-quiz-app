import React, { useState, useEffect} from 'react';
import { axiosInstance } from '../../util/axios';
import QuizCard from './QuizCard';

/* A Component to render Quiz List per Category */

const QuizList = (props) => {
  const historyState = props.location.state;

  const { name: catName } = historyState;

  const [quizList, setQuizList] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const result = await axiosInstance.get(`/quiz/${props.location.state['_id']}/list`);
      setQuizList(result.data);
    };
    fetchData();
  }, [])

  return (<div className="quiz-list">
    <h3> Testovi iz {catName}</h3>
    {
      quizList.map((quiz) => {
        return (<QuizCard key={quiz._id} quiz={quiz} ></QuizCard>)
      })
    }
  </div>);
};

export default QuizList;




