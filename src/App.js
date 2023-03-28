import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FormFirst from './component/FormFirst';
import FormSecond from './component/FormSecond';
import './App.css';
import Header from './component/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-slate-400">
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<FormFirst />} />
        <Route path="/second" element={<FormSecond />} />
      </Routes>
    </div>
  );
}

export default App;
