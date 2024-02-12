import React from 'react';
import Header from '../../components/Header/Header';
import BgImage from '../../assets/images/buildersBg.jpg'
import { NavLink } from 'react-router-dom';
import { styles } from '../../Styles/Styles';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import Footer from '../../components/Footer';

const htmlContent = `
      <p>This Privacy policy is subject to the terms of the Site Policy (User agreement) of Truehomes24. This policy is effective from the date and time a user registers with Truehomes24 by filling up the Registration form and accepting the terms and conditions laid out in the Site Policy.</p>
      <p>In order to provide a personalised browsing experience, Truehomes24 may collect personal information from you to complete a registration form or seek some information from you. When you let us have your preferences, Truehomes24 will be able to deliver or allow you to access the most relevant information that meets your end.</p>
      <p>To improve the responsiveness of the Sites for our Users, Truehomes24 may use "cookies", or similar electronic tools to collect Information to assign each visitor a unique, random number as a User Identification (User ID) to understand the User's individual interests using the identified computer or device. Unless you voluntarily identify yourself, Truehomes24 will have no way of knowing who you are, even if Truehomes24 assign a cookie to your computer or device. The only personal information a cookie can contain is information you supply. A cookie cannot read data off your hard drive or device. Our advertisers may also assign their own cookies to your browser, a process that Truehomes24 do not control. Truehomes24 receive and store certain types of Information whenever you interact with us via Site or Service though your computer/laptop/netbook or mobile/tablet/pad/handheld device etc.</p>
      <p><strong>Security</strong></p>
      <p>Truehomes24 use commercially reasonable security measures to protect the loss, misuse, and alteration of the information under our control. However Truehomes24 cannot absolutely guarantee the protection of any information shared with us.</p>
      <p><strong>Confidentiality of Account Information</strong></p>
      <p>Customers are responsible for maintaining the secrecy and accuracy of password, email address, and other account information at all times. Truehomes24 is not responsible for any personal data transmitted to a third party as a result of an incorrect account related information.</p>
      <p></p>
     `       
const PrivacyPolicy = () => {
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
              <p className={'text-center text-2xl sm:text-3xl text-white font-semibold tracking-wider md:text-3xl'}>Privacy Policy</p>
              <div className='mt-5 text-xs lg:text-sm'>
                <NavLink to={'/'}>HOME</NavLink> / <span>PRIVACY POLICY</span>
              </div>
            </div>
            <div className='pt-5 min-h-[500px] bg-white'>
              <div className='px-2 sm:px-[5%] w-full'>
                <b className={styles.title4 + 'tracking-wide '}>Privacy Policy</b>
                <div className='mt-5 prose prose-sm sm:prose-base prose-p:my-2 min-w-full' dangerouslySetInnerHTML={{ __html: htmlContent }} />
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

export default PrivacyPolicy;
