import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { styles } from '../../Styles/Styles';
import SiteMapProperty from '../../components/SiteMapProperty';
import { NavLink } from 'react-router-dom';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import Footer from '../../components/Footer';

const Sitemap = () => {
    const [propertyFor, setPropertyFor] = useState('Sale');
    return (
        <div className=''>
            <Header />
            <div className='mt-20 container mx-auto px-2 sm:px-[5%]'>
                <div className='text-sm'>
                    <NavLink to={'/'} className='cursor-pointer hover:opacity-70'>Home</NavLink> {'> '}
                    <NavLink className='cursor-pointer hover:opacity-70'>SiteMap</NavLink> {'> '}
                    <span>{propertyFor}</span>
                </div>
                <div className='mt-5 flex flex-wrap gap-16'>
                    <p className={styles.title1 + ' pl-[0px]'}>Properties SiteMap</p>
                    <div className='flex gap-2'>
                        <button
                            onClick={() => setPropertyFor('Sale')}
                            className={(propertyFor == 'Sale' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-cyan-600 hover:bg-cyan-700') + ' rounded px-4 py-1 text-white '}>
                            Sale
                        </button>
                        <button
                            onClick={() => setPropertyFor('Rent')}
                            className={(propertyFor == 'Rent' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-cyan-600 hover:bg-cyan-700') + ' rounded px-4 py-1 text-white '}>
                            Rent
                        </button>
                    </div>
                </div>
                <div className='mt-10'>
                    <SiteMapProperty title={'Eluru'} />
                    <SiteMapProperty title={'Guntur'} />
                    <SiteMapProperty title={'Patna'} />
                    <SiteMapProperty title={'Chandigarh'} />
                </div>
            </div>
            <div className=''>
                <TopCItiesFilter />
                <Footer />
            </div>

        </div>
    );
}

export default Sitemap;
