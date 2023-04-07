const express = require('express')
const dotenv = require('dotenv')
const app = express()
const axios = require('axios')
const port = 8080

dotenv.config();
app.get('/', (req, res) => {
  // Send a response to the front-end
  res.send('Hello World!');
});
app.get('/firebase', (req, res) => {
  console.log('secondres',res)
  res.send({"Key": process.env.FB_DB_apiKey, 
  "Auth": process.env.FB_DB_authDomain,
  "ID": process.env.FB_DB_projectId,
  "Bucket": process.env.FB_DB_storageBucket,
  "Sender": process.env.FB_DB_messagingSenderId,
  "App": process.env.FIREBASE_FB_DB_appId});
})

  app.get('/mystery', (req,res) => {
    // Make API call to external API
    const options = {
      method: 'GET',
      url: 'https://random-recipes.p.rapidapi.com/ai-quotes/5',
      headers: {
        'X-RapidAPI-Key': '43a538bf98msh845702fed47406cp111041jsn999253279440',
        'X-RapidAPI-Host': 'random-recipes.p.rapidapi.com'
      }
    };
    
    axios.request(options) 
    .then(response => {
      // Extract relevant data from response and send it to front-end
      const recipe = response.data;
      console.log('this is the desired recipe',recipe)
      res.send({
        "Mystery": recipe
      });
    })
    .catch(error => {
      console.error('Error making API call:', error);
      res.status(500).send("Internal Server Error");
    });
  });



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})