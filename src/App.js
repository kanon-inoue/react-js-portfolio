import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Page/Home/Homescreen';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
