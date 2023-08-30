import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<CountriesList />} />
        <Route path="/country/:name" element={<CountryDetail />} />
      </Routes>
    </main>
  );
}

export default App;
