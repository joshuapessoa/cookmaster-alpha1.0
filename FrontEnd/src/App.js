import logo from './logo.svg';
import './App.css';
import Header from "./Header.js"
import Search from "./Search.js"
import Rec from "./Components/Recommendations.js"
import Mystery from "./Components/Mystery.js"
import Ingredients from "./Components/Ingredients.js"
import Home from "./Components/Home.js"
import Login from "./Components/Login.js"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import axios from 'axios';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { FirebaseAppProvider } from 'reactfire';

function FirebaseAppProviderWrapper({ children }) {
  const [firebaseConfig, setFirebaseConfig] = useState({});

  useEffect(() => {
    axios.get('/firebase').then((res) => {
      setFirebaseConfig({
        apiKey: res.data.Key,
        authDomain: res.data.Auth,
        projectId: res.data.ID,
        storageBucket: res.data.Bucket,
        messagingSenderId: res.data.Sender,
        appId: res.data.App,
      });
    });
  }, []);

  if (!firebaseConfig.apiKey) {
    return <div>Loading Firebase...</div>;
  }

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();

  return (
    <FirebaseAppProvider firebaseApp={firebaseApp} initFirestore={firestore}>
      {children}
    </FirebaseAppProvider>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mystery" element={<Mystery />} />
          <Route path="/Ingredients" element={<FirebaseAppProviderWrapper><Ingredients /></FirebaseAppProviderWrapper>} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Rec" element={<Rec />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;