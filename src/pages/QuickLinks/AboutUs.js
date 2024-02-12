import React from 'react';
import Header from '../../components/Header/Header';
import BgImage from '../../assets/images/buildersBg.jpg'
import { NavLink } from 'react-router-dom';
import { styles } from '../../Styles/Styles';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import Footer from '../../components/Footer';

const htmlContent = `
          <p>At www.truehomes24.com, we understand that people everywhere are searching for a home to call their own. A home is a cherished memory that lasts forever, where the walls embrace memories, the ceilings shelter love and laughter, where the quiet corners offer a much-needed pause and life itself becomes a reason to celebrate.</p>
          <p>We want to make the journey as joyful as the moment when you finally find the perfect home. So we begin by partnering with our customers from the start and being there when it matters the most - right from online search to brokers to home loans to paperwork to finally finding that perfect home. At makaan.com, we help you find joy.</p>
          <br/><p><strong>Our Vision</strong></p>
          <p>Delivering trustworthy experiences that you cherish for a lifetime.</p>
          <br/><strong>Our Mission</strong>
          <p>To be the first choice for our consumers and partners in their journey of discovering, renting, buying, selling and financing a home. We do that with data, design, technology, and above all the passion of our people, while delivering value to our shareholders.</p>
          <p>Please write to us at services@truehomes24.com or call us at +918825553678 (09:00 AM to 07:00 PM, Monday to Friday)</p>
        `       
const AboutUs = () => {
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
              <p className={'text-center text-2xl sm:text-3xl text-white font-semibold tracking-wider md:text-3xl'}>About Us</p>
              <div className='mt-5 text-xs lg:text-sm'>
                <NavLink to={'/'}>HOME</NavLink> / <span>ABOUT US</span>
              </div>
            </div>
            <div className='pt-5 min-h-[500px] bg-white'>
              <div className='px-2 sm:px-[5%] w-full'>
                <b className={styles.title4 + 'underline tracking-wide text-red-600'}>About Us</b>
                <div className='prose prose-sm sm:prose-base prose-p:my-[2px] prose-strong:underline prose-strong:text-red-600 min-w-full' dangerouslySetInnerHTML={{ __html: htmlContent }} />
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

export default AboutUs;
