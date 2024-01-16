import React from 'react';
import Header from '../../components/Header/Header';
import { styles } from '../../Styles/Styles';
import { NavLink } from 'react-router-dom';
import DropdownIcon from '../../components/svgIcons';
import userIcon from './../../assets/images/user.svg';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import Footer from '../../components/Footer';

const agentsData = [
    { name: 'Woodies', type: 'AGENTS', saleNum: '1', rentNun: '0' },
    { name: 'VYBHAV KUMAR', type: 'AGENTS', saleNum: '1', rentNun: '0' },
    { name: 'Varna Homes', type: 'AGENTS', saleNum: '1', rentNun: '0' },
    { name: 'VA Shelters', type: 'AGENTS', saleNum: '1', rentNun: '0' },
    { name: 'TUTTUTMA', type: 'AGENTS', saleNum: '4', rentNun: '6' },
    { name: 'Truehomes24', type: 'AGENTS', saleNum: '771', rentNun: '970' },
    { name: 'Tolet Realty', type: 'AGENTS', saleNum: '1', rentNun: '0' },
    { name: 'Woodies', type: 'AGENTS', saleNum: '1', rentNun: '0' },
    { name: 'Woodies', type: 'AGENTS', saleNum: '1', rentNun: '0' },
    { name: 'Woodies', type: 'AGENTS', saleNum: '1', rentNun: '0' },
    { name: 'Woodies', type: 'AGENTS', saleNum: '1', rentNun: '0' },
    { name: 'Woodies', type: 'AGENTS', saleNum: '1', rentNun: '0' },
    { name: 'Woodies', type: 'AGENTS', saleNum: '1', rentNun: '0' },
    { name: 'Woodies', type: 'AGENTS', saleNum: '1', rentNun: '0' },
]
const Agents = () => {
    return (
        <div className=''>
            <Header />
            <div className='mt-16 px-[2%] py-10'>
                <div className='flex flex-wrap justify-between w-[90%]'>
                    <div className='mb-5'>
                        <p className={styles.title4}>Real Estate Agents</p>
                        <div className='text-sm mt-1 to-gray-300'>
                            <NavLink to='/' className={'hover:text-orange-700'}>Home</NavLink> / <span>Top Real Estate Agents</span>
                        </div>
                    </div>
                    <div className=''>
                        <span className='text-gray-600'>Available Properties:</span>
                        <button className={'border-[1px] border-orange-500 text-orange-500 px-2 py-[2px] rounded-xl mx-2 text-sm'}>Sale(23945)</button>
                        <button className={'border-[1px] border-orange-500 text-orange-500 px-2 py-[2px] rounded-xl text-sm'}>Rent(24945)</button>
                    </div>
                    <div>
                        <button className={styles.btn + 'px-4'}>
                            All Agents
                            <DropdownIcon />
                        </button>
                    </div>
                </div>
            </div>
                <div className='flex flex-wrap gap-2 justify-center sm:gap-4'>
                    {agentsData.map((item, index) => {
                        return (
                            <div className='shadow-md border-[1px] rounded flex flex-col justify-center items-center w-[90%] sm:w-[45%] md:w-[22%] py-5'>
                                <div className='flex flex-col justify-center items-center'>
                                    <img src={userIcon} className='h-[70px] w-[70px]' />
                                    <p className={styles.title4 + 'mt-1'}>{item.name}</p>
                                    <p className='text-gray-600'>{item.type}</p>
                                </div>
                                <span className={styles.btn + 'bg-green-600 text-white my-5'}>N/A</span>
                                <div className='mt-2 text-gray-600'>{item.saleNum} Properties for <span className='text-orange-500 font-semibold'>Sale</span></div>
                                <div className='mt-2 text-gray-600'>{item.rentNun} Properties for <span className='text-orange-500 font-semibold'>Rent</span></div>
                                <button className={'mt-5 sm:mt-8 bg-gray-700 px-4 py-1 text-white rounded-md'}>View Profile</button>
                            </div>
                        )
                    })}
                </div>
            <TopCItiesFilter />
            <Footer />
        </div>
    );
}

export default Agents;
