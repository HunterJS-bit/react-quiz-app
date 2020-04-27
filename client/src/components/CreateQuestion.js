import React, { useState, useEffect } from 'react';
import { axiosInstance } from "../util/axios";
import QuestionCategory from './Questions/QuestionCategory';

const CreateQuestion = () => {

  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [image, setImage] = useState('');

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
    const newOptions = options.map((option, sidx) => {
      if (index !== sidx) return option;
      return { ...option, name: evt.target.value };
    });
    setOptions(newOptions);
  };

  const setQuestionCategory = (category) => {
    const list = [...quizList];
    list.push({ name: category.name, id: category['_id'], position: 0 });
    setQuizList(list);
  };

  const onFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const submitForm = async (e) => {
    console.log('submit form');
    e.preventDefault();
    let formData = new FormData();
    formData.append('file', image);
    formData.append('question', question);
    formData.append('options', JSON.stringify(options));
    formData.append('quizCategory', JSON.stringify(quizList));


    console.log('Catt listtt ', quizList);
    // const data = await axiosInstance.post('/question', formData);
    // console.log('evo ga response ');
    // console.log(data);
  };


  const showResults = (list) => {
    if (list.length) {
      return list.map((q,index) => {
        return <li key={q._id + index } onClick={() => setQuestionCategory(q)}> { q.name }</li>;
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

  const updateCategory = (catId, catPosition) => {
      // console.log('Im hererererer', catId, catPosition);
      const list = quizList.map(c => {
        if (c.id === catId) {
          return { ...c, position: catPosition };
        }
        return c;
      });
      setQuizList(list);
  };

  const removeCategory = (e,cat) => {
      e.preventDefault();
      const arr = quizList.filter(c => c.id != cat.id);
      setQuizList(arr);
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
        <input type="text" value={question} onChange={e => setQuestion(e.target.value)} />
      </label>
    </p>
    <div className="form-group">
       <input type="file"
              name="file"
              id="input-files"
              onChange={onFileChange}
              />
    </div>
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
      <button onClick={addOption}>Add Optional answers</button>
    </p>
    <p> Choosen Categories </p>
    <div className="quiz-tests">
      {
        quizList.map(cat=> {
            return (<QuestionCategory key={cat.id} category={cat} updateCat={updateCategory} removeCat={removeCategory}></QuestionCategory>)
        })
      }
    </div>
    <input type="submit" value="Submit" />
  </form>)
};

export default CreateQuestion;
