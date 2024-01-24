import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PropertyList from './pages/PropertyList';
import Agents from './pages/Agents/Agents';
import Builders from './pages/Builders/Builders';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import Profile from './pages/Profile';
import PostProperty from './pages/PostProperty';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property-list' element={<PropertyList />} />
        <Route path='/agents' element={<Agents/>} />
        <Route path='/builders' element={<Builders/>} />
        <Route path='/project_details' element={<ProjectDetails/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/post_property' element={<PostProperty/>} />
      </Routes>
      {/* <Home/> */}
      {/* <PropertyList/> */}
    </>
  );
}

export default App;
