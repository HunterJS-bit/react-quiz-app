import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../util/axios";


const CreateQuiz = () => {

  const [categoryList, setCategories] = useState([]);
  const [category, setCategory] = useState(null);
  const [name, setName] = useState('');

  const selectChange = (e) => {
    const value = e.target.value || null;
    setCategory(value);
  };

  useEffect(() => {
    console.log('datttt');
    const fetchData = async () => {
      const response = await axiosInstance.get('/category/main');
      setCategories(response.data);
    }
    fetchData();
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    const quiz = {
      name,
      category
    };
    console.log('Form submited');
    const data = await axiosInstance.post('/quiz/create', quiz);
    console.log(data);
  };

  return (<div className="quiz-create">
    <p>create quiz</p>
    <form onSubmit={submitForm}>
      <p>
        <label>
          Enter name of Test:
          <input  type="text" value={name} onChange={(e) => { setName(e.target.value)}} />
        </label>
      </p>
      <p>
        <select value={category} onChange={selectChange}>
          <option value=''>  Choose Parent </option>
          {
            categoryList.map((cat) => <option key={cat['_id']} value={cat['_id']} >{cat.name}</option>)
          }
        </select>
      </p>
      <p>
        <button> Add Questions & Answers </button>
      </p>
      <p>
        <input type="submit" value='Submit Form'></input>
      </p>
    </form>
  </div>)
};

export default CreateQuiz;
