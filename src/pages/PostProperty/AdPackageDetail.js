import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import topBgImage from '../../assets/images/buildersBg.jpg'
import { NavLink } from 'react-router-dom';
import { styles } from '../../Styles/Styles';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import Footer from '../../components/Footer';
import PaymentGateway from '../../components/PaymentGateway';

const AdPackageDetail = () => {
  const [openGateway,setOpenGateway] = useState(false);
  return (
    <div>
      <Header />
      <div className=' fixed top-0 h-full w-full'>
        <img alt='' src={topBgImage} className='h-full' />
      </div>
      <div className='fixed h-full w-full bg-black bg-opacity-50 overflow-y-scroll'>
        <div>
          <div className='mt-[150px] h-[100px] z-[200] text-center text-white tracking-widest'>
            <p className={'text-2xl sm:text-3xl md:text-4xl font-semibold'}>Ad Package Detail</p>
            <div className='mt-5 text-xs lg:text-sm'>
              <NavLink to={'/'}>HOME</NavLink> / <NavLink to={'/membership'}>AD PACKAGE</NavLink>
            </div>
          </div>
          <div className='mt-10 pt-8 min-h-[400px] bg-white'>
            <div className='md:flex xl:px-[10%]'>
              <div className='border-b-[1px] md:border-b-0 md:border-r-[1px] border-gray-600 py-5 px-4 sm:px-8 md:w-[30%]'>
                <p className={styles.title2 + 'md:text-end'}>Payment Option</p>
                <div className='flex gap-5 md:justify-end mt-10 sm:mr-5'>
                  <span>
                    <input type='radio' checked className='size-6' />
                  </span>
                  <span className=''> RozorPay </span>

                </div>
              </div>
              <div className='md:w-[65%] p-5 sm:px-10'>
                <p className={styles.title2}>Gold Package</p>
                <div className='mt-8 sm:flex flex-wrap justify-between border-b-[1px] pb-5 border-gray-300'>
                  <div className='px-2'>
                    <div className=''><span className='font-semibold mr-2'>1 </span> Property Listing(s)</div>
                    <div className=''><span className='font-semibold mr-2'>85% </span> Visibility</div>
                  </div>
                  <div className='px-2'>
                    <div className=''><span className='font-semibold mr-2'>5 </span>No. of Photos</div>
                    <div className=''><span className='font-semibold mr-2'>Video</span>Upload Allow</div>
                  </div>
                  <div className='px-2'>
                    <div className=''><span className='font-semibold mr-2'>10</span> Selected Days</div>
                  </div>
                </div>
                <div className='mt-5 grid grid-cols-1 sm:grid-cols-2'>
                  <div className='mb-5'>
                    <div className=''>Plan Amount<span className='font-semibold ml-4'>Rs. 50</span></div>
                    <div className=''>GST (18%)<span className='font-semibold ml-4'>Rs. 9</span></div>
                    <div className=''>Grand Total<span className='font-semibold ml-4'>Rs. 59</span></div>
                  </div>
                  <div className='mx-auto my-auto'>
                    <button onClick={()=>setOpenGateway(true)} className={styles.formBtn + styles.btnBlackHover + 'px-14'}>Pay Now</button>
                     {openGateway && <PaymentGateway closeGateway={()=>setOpenGateway(false)} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='-mt-14'>
          <TopCItiesFilter />
          <Footer />
        </div>

      </div>
    </div>
  );
}

export default AdPackageDetail;
