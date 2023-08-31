import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Detail from './pages/Detail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:country_name" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
