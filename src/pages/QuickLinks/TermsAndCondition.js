import React from 'react';
import Header from '../../components/Header/Header';
import BgImage from '../../assets/images/buildersBg.jpg'
import { NavLink } from 'react-router-dom';
import { styles } from '../../Styles/Styles';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import Footer from '../../components/Footer';

const htmlContent = `
        <p>Welcome to <strong>Truehomes24.com.</strong> This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and Terms of Use for access or usage of the website Truehomes24.com</p>
        <p>The domain <strong>Truehomes24.com.</strong> (hereinafter referred to as "Website") is owned by Mary&Beena Realtors Pvt Ltd, registered under the Company's Act,1956 (hereinafter referred to as “Pvt Ltd Company” MIG-365, HUDCO, G BLOCK, KALLAHALLI, VINOBA, SHIVAMOGGA, Shimoga, Karnataka, India- 577204</p>
        <p><strong>Truehomes24</strong>, a digital real estate advertising / marketing and information services platform connecting people with the real estate market. Truehomes24 and our subsidiaries and affiliates (collectively the “Company” or "Truehomes24") provide you with access to a variety of services, including but not limited to the www.Truehomes24 website (the "Website") and Truehomes24 mobile applications (the “Mobile App”) and all the products and services available through our Website and Mobile App (collectively the "Services"). The Website and Mobile App is owned and operated by Locon Solutions Private Limited, a company incorporated under the laws of India.</p>
        <br/><p><strong>1.ACCEPTANCE OF THE TERMS AND CONDITIONS</strong></p>
        <p>i. Truehomes24 agrees to provide to the User and the User agrees to avail from Truehomes24 the Services in accordance with and on the basis of this Agreement and the User’s acceptance of the Terms and Conditions and Privacy Policy constitute the Agreement between the User and Truehomes24 in relation to the Services and access of the Site.</p>
         <p>ii. The User undertakes to be bound by the Agreement each time the User accesses the Site, completes the registration process</p>
         <p>iii. The User represents and warrants to Truehomes24 that the User is 18 (eighteen) years of age or above, and is capable of entering into, performing and adhering to the Agreement. Individuals under the age of 18 (eighteen) may access the Site or avail a Service only with the involvement, guidance, supervision and/or prior consent of their parents and/or legal guardians, through the Account of or under the guidance of such parent/ legal guardian.</p>
         <br/><strong>2.ACCESS TO THE SITE</strong>
         <p>i. First time Users can access the Site for preliminary browsing without creating an Account.</p>
         <p>ii. The User undertakes and agrees to provide User Information, uploading Content and create an Account in order to retrieve specific information and avail the Services.</p>
         <p>iii. Truehomes24 shall verify the Account by requesting for the one-time password from the User. The User undertakes and agrees that a mobile number can only be used once to create an Account. The User is prohibited from creating multiple Accounts and Truehomes24 reserves the right to conduct appropriate verification to detect such multiplicity of Accounts and take appropriate action.</p>
         <p>iv. The User undertakes to cooperate with any of Truehomes24’s personnel in connecting with the User’s access to the Site, as may be required by Truehomes24.</p>
         <p></p>
        `       
const TermsAndCondition = () => {
  return (
    <div className='container mx-auto'>
      <Header />
      <div>
        <div className=' fixed left-0 top-0 h-screen w-screen'>
          <img alt='' src={BgImage} className='h-full' />
        </div>
        <div className='fixed left-0 h-full mb-2 w-full bg-black bg-opacity-50 overflow-y-scroll'>
          <div>
            <div className='mt-[150px] mb-10 h-[100px] z-[200] text-center text-white tracking-widest'>
              <p className={'text-center text-2xl sm:text-3xl text-white font-semibold tracking-wider md:text-3xl'}>Terms & Conditions</p>
              <div className='mt-5 mb-5 text-xs lg:text-sm'>
                <NavLink to={'/'}>HOME</NavLink> / <span>TERMS & CONDITIONS</span>
              </div>
            </div>
            <div className='pt-5 min-h-[500px] bg-white'>
              <div className='px-2 sm:px-[5%] w-full'>
                <b className={styles.title4 + 'underline tracking-wide '}>Terms & Conditions</b>
                <div className='prose space-y-1 min-w-full' dangerouslySetInnerHTML={{ __html: htmlContent }} />
              </div>
              <TopCItiesFilter />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndCondition;
