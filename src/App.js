import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PropertyList from './pages/PropertyList';
import Agents from './pages/Agents/Agents';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property-list' element={<PropertyList />} />
        <Route path='/agents' element={<Agents/>} />
      </Routes>
      {/* <Home/> */}
      {/* <PropertyList/> */}
    </>
  );
}

export default App;
