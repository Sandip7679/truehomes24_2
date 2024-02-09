import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import BgImage from '../../assets/images/buildersBg.jpg'
import { NavLink } from 'react-router-dom';
import { styles } from '../../Styles/Styles';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import TopCItiesFilter from '../../components/TopCItiesFilter';
import Footer from '../../components/Footer';

const ContactUs = () => {
  const [value, setValue] = useState()
  return (
    <div className='container mx-auto'>
      <Header />
      <div>
        <div className=' fixed left-0 top-0 h-screen w-screen'>
          <img alt='' src={BgImage} className='h-full' />
        </div>
        <div className='fixed left-0 h-full mb-2 w-full bg-black bg-opacity-50 overflow-y-scroll'>
          <div>
            <div className='mt-[150px] h-[100px] z-[200] text-center text-white tracking-widest'>
              <p className={'text-center text-2xl sm:text-3xl text-white font-semibold tracking-wider md:text-3xl'}>Contact Us</p>
              <div className='mt-5 text-xs lg:text-sm'>
                <NavLink to={'/'}>HOME</NavLink> / <span>CONTACT US</span>
              </div>
            </div>
            <div className='mt-10 pt-10 min-h-[500px] bg-white px-2 sm:px-10'>
              <div className='mb-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='text-center tracking-wider'>
                  <i class="fa-solid fa-location-dot text-2xl"></i>
                  <p className={styles.title3}>Corporate office</p>
                  <p className='mt-5'>B14-ANKUR PALM SPRINGS, PADI,</p>
                  <p>CHENNAI-600050</p>
                  <div className='mt-5'>
                    <p className='mt-2'>RERA :TN/Agent/0179/2022(Tamil Nadu)</p>
                    <p className='mt-2'>RERA: K-RERA/AG/0127/2023(Kerala)</p>
                    <p className='mt-2'>RERA: REA30500072290(Telangana)</p>
                    <p className='mt-5'>GST-29AAOCM0530A1ZT</p>
                  </div>
                </div>
                <div className='text-center tracking-wider'>
                  <i class="fa-solid fa-phone text-xl"></i>
                  <p className={styles.title3}>Direct Contact</p>
                  <a className='mt-5 flex justify-center hover:opacity-60 cursor-pointer' href='tel:918825553678' ><p className='font-semibold'>Phone :</p><p>+918825553678</p></a>
                </div>
                <div className='text-center tracking-wider'>
                  <i class="fa-solid fa-envelope text-xl"></i>
                  <p className={styles.title3}>Email Address</p>
                  <a className='mt-5 hover:opacity-60 cursor-pointer' href='mailto:info@truehomes24.com'>info@truehomes24.com</a>
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-10'>
                <div>
                  <iframe
                    className='h-[480px] w-full mb-5'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1149598.5863159136!2d79.53335823227894!3d13.048697048542913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361:0x6e61a70b6863d433!2sChennai, Tamil Nadu!5e0!3m2!1sen!2sin!4v1604034092548!5m2!1sen!2sin" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                <form>
                  <p className={styles.title1}>Write to us</p>
                  <input required className={styles.input + 'mt-8'} placeholder='Name*' />
                  <input required className={styles.input + 'mt-5'} placeholder='Email*' />
                  <div className='mt-5'>
                    <PhoneInput
                      country={'in'}
                      // containerStyle={{width:'100%'}}
                      inputStyle={{ width: '100%', height: '42px' }}
                      // buttonStyle={{width:'50%'}}
                      // containerClass='w-full'
                      // inputClass='py-2'
                      // placeholder='Phone'
                      inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: true
                      }}
                      // buttonClass='w-[100px]'
                      // value={value}
                      // onChange={val => setValue(val)}
                    />
                  </div>
                  {/* <div className='mt-5'>
                      
                  </div> */}
                  <input required className={styles.input + 'my-5'} placeholder='Subject*' />
                  <textarea required placeholder='Your Message*' className={styles.input+'h-28'} />
                  <button type='submit' className='px-2 py-1 mt-5 rounded-md bg-orange-600 text-white hover:text-gray-800 hover:bg-white hover:border-[1px] border-orange-600'>Send Message</button>
                </form>
              </div>
               <TopCItiesFilter/>
               <Footer/>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ContactUs;
