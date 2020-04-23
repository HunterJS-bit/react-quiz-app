import React, { useState } from "react";
import { axiosInstance } from "../../util/axios";



const CreateCategory = () => {

  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');


  const submitForm = async (e) => {
      e.preventDefault();
      const category = {
        name,
        slug
      };
      await axiosInstance.post('/category', category);
  };

  return (<div className="category-create">
    <form onSubmit={submitForm}>
      <p>Create category</p>
      <p>
        <label>
          Category Url
          <input type='text' value={slug} onChange={(e) => { setSlug(e.target.value)}} />
        </label>
      </p>
      <p>
      <label>
        Category Name
        <input type='text' value={name} onChange={(e) => { setName(e.target.value)}} />
      </label>
      </p>
      <button type="submit">Create Category</button>
    </form>
  </div>);

};


export default CreateCategory;
