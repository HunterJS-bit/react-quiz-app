import React, { useState, useEffect} from 'react';
import { axiosInstance } from '../../util/axios'

{/* A Component to render Quiz List per Category */}

const QuizList = (props) => {
  const historyState = props.location.state;

  const { _id: id, name: catName } = historyState;

  const [quizList, setQuizList] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const result = await axiosInstance.get(`/quiz/${id}/list`);
      console.log('evo ih rezultati ');
      console.log(result);
      setQuizList(result.data);
    };
    fetchData();
  }, [])

  return (<div className="quiz-list">
    <h3> Testovi iz {catName}</h3>
  </div>);
};

export default QuizList;




