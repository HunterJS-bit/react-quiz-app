import React, { useState } from 'react';
import { axiosInstance } from "../util/axios";

const CreateQuestion = () => {

  const [question, setFirstName] = useState("");
  const [options, setOptions] = useState([]);

  const addOption = (e) => {
    e.preventDefault();
    console.log('add option');
    setOptions(options.concat([{ name: ''}]));
  };

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

  const submitForm = async (e) => {
    console.log('submit form');
    e.preventDefault();
    const questionObj = {
      question: question,
      options: options
    };

    const data = await axiosInstance.post('/question', questionObj);
    console.log('evo ga response ');
    console.log(data);
  };

  return( <form onSubmit={submitForm}>
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
    <input type="submit" value="Submit" />
  </form>)
};

export default CreateQuestion;
