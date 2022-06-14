import React from 'react';
import NavBar from './components/navigationBar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
      <Router>
        <NavBar>
          <Routes>
            <Route path="/" exact />
          </Routes>
        </NavBar>
      </Router></>
  );
}

export default App;
