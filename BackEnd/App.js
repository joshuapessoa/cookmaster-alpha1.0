const express = require('express')
const dotenv = require('dotenv')
const app = express()
const port = 8080

dotenv.config();
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
  res.send({
    "Mystery": process.env.REACT_APP_API_KEY_Random
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})