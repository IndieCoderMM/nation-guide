import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import Country from './components/Country';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/country/:name" element={<Country />} />
      </Routes>
    </main>
  );
}

export default App;
