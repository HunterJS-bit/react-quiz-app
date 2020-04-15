import React, { useState } from 'react';
import { axiosInstance } from "../util/axios";

const CreateQuestion = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submitForm = async (e) => {
    console.log('submit form');
    e.preventDefault();
    const questionObj = {
      name: firstName,
      lastName: lastName,
    }
    const data = await axiosInstance.post('/question', questionObj);
    console.log('evo ga response ');
    console.log(data);
  };

  return( <form onSubmit={submitForm}>
    <label>
      First Name:
      <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
    </label>
    <label>
      Last Name:
      <input type="text"  value={lastName} onChange={e => setLastName(e.target.value)} />
    </label>
    <input type="submit" value="Submit" />
  </form>)
};

export default CreateQuestion;
