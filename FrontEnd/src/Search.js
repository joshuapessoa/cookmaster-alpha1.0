import './Search.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';


function Search(){

  
  const [ingredient, setIngredient] = useState('');
  const [returnRecipe, setReturnRecipe] = useState([]);
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
      setReturnRecipe(response.data.recipes);

    } catch (error) {
      console.error('Error:', error.message);
      // Handle error, show error message, etc.
    }

    setIngredient('');
  }

  const handleExpand = (id) => {
    setReturnRecipe(prevRecipes => {
      return prevRecipes.map(rec => {
        if (rec.id === id) {
          return { ...rec, expanded: !rec.expanded };
        }
        return rec;
      });
    });
  }

  return(
    <body className="search">
        <header><h1> What ingredient do you want to use </h1> </header>
      <form onSubmit={handleSubmit}>
      <p>*** separate different ingredients with ",+" ***</p>
        <label htmlFor="ingredient">Ingredient </label>
        <br></br>
        <input
          type="text"
          id="ingredient"
          value={ingredient}
          onChange={handleInputChange}
          required
        />
        
        <button type="submit" className="recipe-button">Submit</button>
      </form>
      <div className="returned-recipe">
        
        {returnRecipe.map((rec)=>{
          return(
            <div className="card"> 
          <h3>{rec.title}</h3>
          <img src={rec.image} className="r-image" alt="food image"></img><br></br>
          <button onClick={() => handleExpand(rec.id)} className="expand-button">
              {rec.expanded ? 'Click here to collapse' : 'Click here to expand'} ↓
            </button>
            {rec.expanded && (
              <div>
                <p>Missing Ingredients: {rec.missedIngredients.map(ingredient => ingredient.name).join(', ')}</p>
                <p>Used Ingredients: {rec.usedIngredients.map(ingredient => ingredient.name).join(', ')}</p>
                
                <a href={`https://www.epicurious.com/search/${encodeURIComponent(rec.title)}`} target="_blank">Link to related recipes</a>
              </div>
            )}
          
          
          </div>
          )

        }
          
          

        
        )}


      </div>
      


    </body>
  )

}

export default Search;