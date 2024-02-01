import React from 'react';
import { CallIcon, EmailIcon, LocationIcon } from './svgIcons';
import { styles } from '../Styles/Styles';


const populerSearches = [
    { itemName: 'Property for Sale' },
    { itemName: 'Property for Sale' },
    { itemName: 'Property for Sale' },
    { itemName: 'Residential Plot ( Land )' },
    { itemName: 'Commercial Property' },
    { itemName: 'Residential Plot ( Land )' },
    { itemName: 'Property for Sale' },
    { itemName: 'Property for Sale' },
    { itemName: 'Property for Sale' }
];
const quickLinks = [
    { linkName: 'Contuct Us' },
    { linkName: 'FAQS' },
    { linkName: 'Blogs' },
    { linkName: 'Terms and Conditions' },
    { linkName: 'About Us' },
    { linkName: 'Privacy Policy' },
    { linkName: 'Refund Policy' },
    { linkName: 'Sitemap' },
]
const Footer = () => {
    return (
        <div className='bg-black w-full p-10 text-white flex flex-wrap justify-between gap-5 px-[2%] lg:px-[5%]'>
            <div className='text-left text-sm w-[300px]'>
                <img alt='' src='https://www.truehomes24.com/assets/images/footer_logo.png' />
                <p className='my-5'>Welcome to Truehomes24.com</p>
                <ul>
                    <li className='flex'>
                        <div classname={' h-6 w-6'}>
                            <LocationIcon classname={' h-5 w-5'} />
                        </div>
                        <div className='ml-2'>
                            <p>Corporate office B14-ANKUR PALM SPRINGS, PADI, CHENNAI-600050</p>
                            <p className='mt-5'>RERA :TN/Agent/0179/2022</p>
                            <p>RERA :TN/Agent/0179/2022</p>
                            <p className='mt-5'>GST-29AAOCM0530A1ZT</p>
                        </div>

                    </li>
                    <li className='flex mt-5'>
                        <div className='h-4 w-4'>
                            <EmailIcon classname={'h-4 w-4 mt-1'} />
                        </div>
                        <p className='ml-4'>info@truehomes24.com</p>
                    </li>
                    <li className='flex'>
                        <CallIcon classname={'h-6 w-6 text-white'} />
                        <p className='ml-2'>+918825553678</p>
                    </li>
                </ul>
            </div>
            <div className='mt-5 text-left'>
                <h1 className={styles.title2Bold}>Popular Searches</h1>
                <div className='text-sm tracking-wide'>
                    {populerSearches.map((item, index) => {
                        return (
                            <div key={index} className='mt-2 hover:underline opacity-90' key={index}>
                                <p>{item.itemName}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='mt-5 text-left'>
                <h1 className={styles.title2Bold}>Quick Links</h1>
                <div className='text-sm tracking-wide opacity-90'>
                    {quickLinks.map((item, index) => {
                        return (
                            <div key={index} className='mt-2 hover:underline' key={index}>
                                <p>{item.linkName}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <div className='text-left mt-5'>
                    <h1 className={styles.title2Bold}>Property in India</h1>
                    <div className='text-left text-sm mt-2 opacity-90'>
                        <p className='hover:underline'>Property inAhmedabad | Property inBangalore</p>
                        <p className='hover:underline'>Property inDelhi | Property inHyderabad</p>
                        <p className='hover:underline'>Property inMumbai | Property inPune</p>
                    </div>
                </div>
                <div className='text-left mt-4'>
                    <h1 className={styles.title2Bold}>New Projects in India</h1>
                    <div className='text-left text-sm mt-2 opacity-90'>
                        <p className='hover:underline'>Property inAhmedabad | Property inBangalore</p>
                        <p className='hover:underline'>Property inDelhi | Property inHyderabad</p>
                        <p className='hover:underline'>Property inMumbai | Property inPune</p>
                    </div>
                </div>
                <div className='text-left mt-4'>
                    <h1 className={styles.title2Bold}>Properties in International Cities</h1>
                    <div className='text-left text-sm mt-2 opacity-90'>
                        <p className='hover:underline'>Property inAhmedabad | Property inBangalore</p>
                        <p className='hover:underline'>Property inMumbai | Property inPune</p>
                    </div>
                </div>
                <div className='bg-gray-200 text-center w-[180px] mt-5 text-black'>
                    <div className='py-2 border-b-[1px] border-black'>
                        <p className=''>Visitor Counter</p>
                    </div>
                    <div className='py-2'>
                        1127276
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
