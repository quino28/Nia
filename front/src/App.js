import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Body } from './components/Body';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Body />
      </div>
    </BrowserRouter>
  )
}

export default App
