import { Route, Routes, useLocation } from 'react-router-dom';
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
import TermsAndCondition from './pages/QuickLinks/TermsAndCondition';
import AboutUs from './pages/QuickLinks/AboutUs';
import PrivacyPolicy from './pages/QuickLinks/PrivacyPolicy';
import RefundPolicy from './pages/QuickLinks/RefundPolicy';
import Sitemap from './pages/QuickLinks/Sitemap';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(()=>{
     if(localStorage.getItem('isLoggedIn') == 'true'){
       dispatch(setuser({}));
     };
  },[])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sale/:pathCity' element={<PropertyList />}/>
        <Route path='/rent/:pathCity' element={<PropertyList />}/>
        <Route path='/new-projects/:pathCity' element={<PropertyList />}/>
        {/* <Route path='/sale/property-for-sale-in-:pathCity' element={<PropertyList />}/>
        <Route path='/rent/property-for-rent-in-:y' element={<PropertyList />}/>
        <Route path='/new-projects/new-projects-for-sale-in-:z' element={<PropertyList />}/> */}
        <Route path='/agents' element={<Agents/>} />
        <Route path='/agent/:path' element={<Agents/>} />
        <Route path='/agent-profile' element={<Profile/>} />
        <Route path='/builders' element={<Builders/>} />
        <Route path='/project_details' element={<ProjectDetails/>} />
        <Route path='/sale/:path/:id' element={<ProjectDetails/>} />
        <Route path='/rent/:path/:id' element={<ProjectDetails/>} />
        <Route path='/new-projects/:path/:id' element={<ProjectDetails/>} />
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
        <Route path='/terms-conditions' element={<TermsAndCondition/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
        <Route path='/refund-policy' element={<RefundPolicy/>} />
        <Route path='/sitemap' element={<Sitemap/>} />
        {/* <Route path='/:notfound' element={<Home/>} /> */}
      </Routes>
    </>
  );
}

export default App;
