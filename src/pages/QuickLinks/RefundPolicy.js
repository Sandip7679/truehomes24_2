import React from 'react';
import Header from '../../components/Header/Header';
import BgImage from '../../assets/images/buildersBg.jpg'
import { NavLink } from 'react-router-dom';
import { styles } from '../../Styles/Styles';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import Footer from '../../components/Footer';

const htmlContent = `
      <p><strong>Last Updated on 09th July, 2021</strong></p>   
      <p>In the event if you wish to cancel any of our services, then, you shall be permitted to do so on our website Truehomes24. The cancellation will be effective only after due confirmation from our side and refund will be made with in 5-7 working days with notification to this effect will be sent to you either by your registered email/ SMS After cancellation of a service, you will not be required to make any additional payments for the period after confirmation of cancellation from our end. However, you will not be entitled to any refunds for any amounts paid by you prior to cancellation even if the services have not been fully rendered by us</p>
      <p>If for 9 months we don’t see any activity/action for an account, it will be considered as Inactive and account will be kept in suspension. A customer would have another 3 months to activate listings/filters etc. If no activity for 12 months, these credits will be terminated/forfeited on account of Inactivity for 12 months and the customer cannot claim credits post this period.</p>
      <p><strong>Pricing  and Services:</strong></p>   
      <p>The charges for various services vary over different offerings which are well defined in our website. To know more about the offerings and pricing, please go through our website.</p>
      <p><strong>Terms & Conditions</strong></p>   
      <p>The User hereby agrees and authorizes that the Company has the right to:</p>
      <p>Any information or data supplied by the user, for the company's own purpose and/or pass on such information to any other associate companies or selected third party, as per this agreement
       Our company also reserves all rights to retain all data or/and information supplied by the User while using the Service to remain with Truehomes24 for the exclusive use of the Company in accordance with service agreement.</p>
      <p>By using Truehomes24 services and providing us your phone/mobile/landline number, you agree to receive all sales or service calls from our employees/partner/alliances not withstanding your registration for NDNC (National Do Not Call) registry.</p>
     `       
const RefundPolicy = () => {
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
              <p className={'text-center text-2xl sm:text-3xl text-white font-semibold tracking-wider md:text-3xl'}>Refund Policy</p>
              <div className='mt-5 text-xs lg:text-sm'>
                <NavLink to={'/'}>HOME</NavLink> / <span>REFUND POLICY</span>
              </div>
            </div>
            <div className='pt-5 min-h-[500px] bg-white'>
              <div className='px-2 sm:px-[5%] w-full'>
                <b className={styles.title4 + 'tracking-wide '}>Cancellation and Refund Policy</b>
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

export default RefundPolicy;
