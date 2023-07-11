
import { LineAxisOutlined } from '@mui/icons-material';
import { useEffect } from 'react';
import './App.css';
import HomePage from './HomePage';
import SignIn from './SignIn';
import axios from 'axios';
import API from "./reactUrl";
import SignUp from './SignUp';
import Sign from './SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserIngredients from './UserIngredients';
import NavBar from './NavBar';
import l from './/Images/1111.png'

function App() {


  // fetch(url)
  // url.get(/kkk)

  return (
    <div className="App">

      
      

      <SignUp></SignUp>
      {/* <HomePage></HomePage> */}
      {/* <button onClick={getClick}>dd</button> */}


    </div>
  );
}

export default App;
