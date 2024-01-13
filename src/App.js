import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PropertyList from './pages/PropertyList';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property-list' element={<PropertyList />} />
      </Routes>
      {/* <Home/> */}
      {/* <PropertyList/> */}
    </>
  );
}

export default App;
