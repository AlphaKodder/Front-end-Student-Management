import './App.css';

import {BrowserRouter} from "react-router-dom"
import MainMenu from './components/MainMenu';
import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainMenu/>
        </BrowserRouter>
    </div>
  );
}

export default App;
