import React, {useState, useEffect} from 'react';
import './Mystery.css';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
function Mystery(){
  let [recipe, setRecipe] = useState([])
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_Random,
      'X-RapidAPI-Host': 'random-recipes.p.rapidapi.com'
    }
  };
  

  useEffect(()=> {
    fetch ('https://random-recipes.p.rapidapi.com/ai-quotes/5', options)
    .then(response => response.json())
    .then(data => setRecipe(data))
    .catch(err => console.error('api error',err))

  },[]) 

  


  return (
    <div>
       <p>Check out the <b>Mystery Recipes</b> that might inspire your meal </p>
    <div class="Random">
     

      {recipe.map((rec) => (
          <div class="ingredients">
          {console.log(rec.instructions[0].text)}
          <h3>{rec.title}</h3>
          {rec.ingredients.map((r) => 

            <p>{r}</p>
          
          )}
          {rec.instructions.map((r) =>     


            <li>{r.text}</li>

          )}

            
          </div>
        ))}
    </div>
    </div>
  )
}

export default Mystery