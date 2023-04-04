import logo from './logo.svg';
import './App.css';
import Header from "./Header.js"
import Search from "./Search.js"
import Rec from "./Components/Recommendations.js"
import Mystery from "./Components/Mystery.js"
import Ingredients from "./Components/Ingredients.js"
import Home from "./Components/Home.js"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import axios from 'axios';


function App() {
// Import the functions you need from the SDKs you need


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const [fireApp, setFireApp] = useState([]);
const [fireDB, setFireDB] = useState([]);

useEffect(() => {
  axios.get('/firebase').then((res) => {
    console.log(res.data);
    setFireApp(initializeApp({
      
  apiKey: res.data.Key,
  authDomain: res.data.Auth,
  projectId: res.data.ID,
  storageBucket: res.data.Bucket,
  messagingSenderId: res.data.Sender,
  appId: res.data.App
}))
  setFireDB(getFirestore(fireApp))
})
},[]);

// Initialize Firebase







  return (
    <div className="App">
      
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path ="/Mystery" element={<Mystery />}></Route>
      <Route path ="/Ingredients" element={<Ingredients />}></Route>
      <Route path ="/Search" element={<Search />}></Route>
      <Route path ="/Rec" element={<Rec />}></Route>
    </Routes>
    </BrowserRouter>

    
    </div>
    
    
  );
}

export default App;
