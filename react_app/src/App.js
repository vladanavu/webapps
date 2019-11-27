import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './view/partials/Header';
import Footer from './view/partials/Footer';
import Main from './view/partials/Main';

function App() {
  return (
    <div className="App">
      <Header title="Header" />
      <Main title="Main" />


    </div>
  );
}

export default App;
