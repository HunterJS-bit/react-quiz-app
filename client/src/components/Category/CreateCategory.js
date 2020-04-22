import React, { useState } from "react";
import { axiosInstance } from "../../util/axios";



const CreateCategory = () => {

  const [name, setName] = useState('');


  const submitForm = async (e) => {
      e.preventDefault();
      const category = {
        name,
      };
      await axiosInstance.post('/category', category);
  };

  return (<div className="category-create">
    <form onSubmit={submitForm}>
      <p>Create category</p>
      <label>
        <input type='text' value={name} onChange={(e) => { setName(e.target.value)}} />
      </label>
      <button type="submit">Create Category</button>
    </form>
  </div>);

};


export default CreateCategory;
