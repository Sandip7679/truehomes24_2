import React from 'react';
import BgImage from '../assets/images/buildersBg.jpg'
import Header from '../components/Header/Header';
import TopCItiesFilter from '../components/TopCItiesFilter';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import { styles } from '../Styles/Styles';
const PageNotFound = () => {
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
                            <p className={'text-center text-2xl sm:text-3xl text-white font-semibold tracking-wider md:text-3xl'}>404 Page Not Found</p>
                            <div className='mt-5 text-xs lg:text-sm'>
                                <NavLink to={'/'}>HOME</NavLink> / <span>404 PAGE NOT FOUND</span>
                            </div>
                        </div>
                        <div className='pt-5 min-h-[500px] bg-white'>
                            <div className='px-2 sm:px-[5%] w-full text-center'>
                                <p className={'text-center mb-5 ' + styles.title4}>Ohh! Page Not Found</p>
                                <NavLink to={'/'} className={'text-gray-500'}>Go Back to home page</NavLink>
                            </div>
                            <div className='mt-5'>
                                <TopCItiesFilter />
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;
