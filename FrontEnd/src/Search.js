import './Search.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';


function Search(){

  
  const [ingredient, setIngredient] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setIngredient(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic with ingredient
    console.log('fr',ingredient);
  }


  return(
    <div>
        <header><h1> What ingredient do you want to use </h1> </header>

      <body><h1> 233333 </h1></body>
      <h1>Ingredient Form</h1>
      <form onSubmit={handleSubmit}>
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