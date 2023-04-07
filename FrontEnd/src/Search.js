import './Search.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';


function Search(){

  
  const [ingredient, setIngredient] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setIngredient(value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/search', {'name': ingredient});
      console.log('Response:', response.data);
      // Handle response, update UI, etc.
      
    } catch (error) {
      console.error('Error:', error.message);
      // Handle error, show error message, etc.
    }

    setIngredient('');
  }


  return(
    <div>
        <header><h1> What ingredient do you want to use </h1> </header>
      <form onSubmit={handleSubmit}>
      <p>*** separate different ingredients with ",+" ***</p>
        <label htmlFor="ingredient">Ingredient:</label>
        <input
          type="text"
          id="ingredient"
          value={ingredient}
          onChange={handleInputChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>


    </div>
  )

}

export default Search;