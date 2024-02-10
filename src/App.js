import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PropertyList from './pages/PropertyList';
import Agents from './pages/Agents/Agents';
import Builders from './pages/Builders/Builders';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import PostProperty from './pages/PostProperty/PostProperty';
import NewProject from './pages/PostProperty/NewProject';
import BuyerRegistration from './pages/BuyerRegistration';
import AdPackages from './pages/PostProperty/AdPackages';
import ManageProperty from './pages/MyDashboard/ManageProperty';
import ManageProfile from './pages/MyDashboard/ManageProfile';
import Profile from './pages/Agents/Profile';
import EditProfile from './pages/MyDashboard/EditProfile';
import AdPackageDetail from './pages/PostProperty/AdPackageDetail';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setuser } from './Redux/reducer/User';
import ContactUs from './pages/QuickLinks/ContactUs';
import FAQs from './pages/QuickLinks/FAQs';
import Blogs from './pages/QuickLinks/Blogs';
import BlogDetails from './pages/QuickLinks/BlogDetails';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
     if(localStorage.getItem('isLoggedIn') == 'true'){
       dispatch(setuser({}));
     };
  },[])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property-list' element={<PropertyList />}/>
        <Route path='/:propertyFor' element={<PropertyList />}/>
        <Route path='/agents' element={<Agents/>} />
        <Route path='/builders' element={<Builders/>} />
        <Route path='/project_details' element={<ProjectDetails/>} />
        <Route path='/agent-profile' element={<Profile/>} />
        <Route path='/post-property' element={<PostProperty/>} />
        <Route path='/post-property/new-project' element={<NewProject/>} />
        <Route path='/buyer-registration' element={<BuyerRegistration/>} />
        <Route path='/membership' element={<AdPackages/>} />
        <Route path='/membership/detail' element={<AdPackageDetail/>} />
        <Route path='/manage-property' element={<ManageProperty/>} />
        <Route path='/dashboard/my-profile' element={<ManageProfile/>} />
        <Route path='/dashboard/edit-profile' element={<EditProfile/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/faqs' element={<FAQs/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/blog-detail' element={<BlogDetails/>} />
      </Routes>
    </>
  );
}

export default App;
