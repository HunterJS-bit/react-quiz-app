import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../util/axios";



const CreateCategory = () => {

  const [name, setName] = useState('');
  const [parent, setParent] = useState(null);
  const [data, setData] = useState({ categories: [] });

  const selectChange = (e) => {
      setParent(e.target.value || null);
  };

  useEffect(() => {
    console.log('datttt');
    const fetchData = async () => {
      const response = await axiosInstance.get('/category/main');
      setData({ categories: response.data })
    }
    fetchData();
  }, []);

  const submitForm = async (e) => {
      e.preventDefault();
      const category = {
        name,
        parent,
      };
      const response = await axiosInstance.post('/category', category);
  };

  return (<div className="category-create">
    <form onSubmit={submitForm}>
      <p>Create category</p>
      Parent Category
      <select value={parent} onChange={selectChange}>
        <option value=''>  Choose Parent </option>
        {
          data.categories.map((cat) => <option key={cat['_id']} value={cat['_id']} >{cat.name}</option>)
        }
      </select>
      <label>
        <input type='text' value={name} onChange={(e) => { setName(e.target.value)}} />
      </label>

      <button type="submit">Create Category</button>
    </form>
  </div>);

};


export default CreateCategory;
