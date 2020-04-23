import React, { useState, useEffect } from 'react';
import { axiosInstance } from "../util/axios";

const CreateQuestion = () => {

  const [question, setFirstName] = useState('');
  const [options, setOptions] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');
  const [quizCatList, setQuizCatList] = useState([]);
  const [quizList, setQuizList] = useState([]);

  const addOption = (e) => {
    e.preventDefault();
    console.log('add option');
    setOptions(options.concat([{ name: ''}]));
  };

  // todo add delay (search only when user stops typing)
  useEffect(() => {
    console.log('Do searh');
    const searchCategories = async () => {
      const result = await axiosInstance.get(`/quiz/search?`, {
        params: {
          name: searchFilter
        }
      });
      setQuizCatList(result.data);;
    }
    if (searchFilter) {
      console.log('herer');
      searchCategories();
    }
  }, [searchFilter])

  const removeOption = (e, index) => {
    console.log('remove option');
    e.preventDefault();
    const newArr = options.filter((e, elementIndex) => { return elementIndex !== index;});
    setOptions(newArr);
  };

  const setOption = (evt, index) => {
    console.log('about to set option');
    const newShareholders = options.map((option, sidx) => {
      if (index !== sidx) return option;
      return { ...option, name: evt.target.value };
    });
    setOptions(newShareholders);
  };

  const setQuestionCategory = (category) => {
    const list = [...quizList];
    list.push({ name: category.name, id: category['_id'] });
    setQuizList(list);
  };

  const submitForm = async (e) => {
    console.log('submit form');
    e.preventDefault();
    const questionObj = {
      question: question,
      options: options,
      quizCategory: quizList
    };
    const data = await axiosInstance.post('/question', questionObj);
    console.log('evo ga response ');
    console.log(data);
  };


  const showResults = (list) => {
    if (list.length) {
      return list.map((q) => {
        return <li key={q._id} onClick={() => setQuestionCategory(q)}> { q.name }</li>;
      })
    } else if (searchFilter && !list.length) {
       return <p>No items</p>;
    }
  }

  const resetFilter = (e) => {
    e.preventDefault(); 
    setSearchFilter('');
    setQuizCatList('');
  };

  return( <form onSubmit={submitForm}>

      <label htmlFor="filter">Filter by Quiz Name: </label>
        <input type="text" id="filter" type="text" value={searchFilter} onChange={(e) => { setSearchFilter(e.target.value)}}/>
        <button onClick={resetFilter}>Clear</button>
      <ul className="search-list">
        { showResults(quizCatList) }
      </ul>
    <p>
      <label>
        Question:
        <input type="text" value={question} onChange={e => setFirstName(e.target.value)} />
      </label>
    </p>
    {
      options.map((e, index) => {
        return <div key={index}>
          <label>
            Option {index + 1}:
            <input type="text" value={e.name} onChange={(e) => setOption(e, index)} />
          </label>
          <button onClick={(e) => removeOption(e, index)}>-</button>
        </div>;
      })
    }
    <p>
      <button onClick={addOption}>Add Option</button>
    </p>
    <p> Choosen Categories </p>
    <div className="quiz-tests">
      {
        quizList.map(e=> {
        return (<span className="cat" key={e.id}>{ e.name }</span>);
        })
      }
    </div>
    <input type="submit" value="Submit" />
  </form>)
};

export default CreateQuestion;
