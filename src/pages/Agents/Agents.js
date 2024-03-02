import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { styles } from '../../Styles/Styles';
import { NavLink } from 'react-router-dom';
import DropdownIcon from '../../components/svgIcons';
import userIcon from './../../assets/images/user.svg';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import Footer from '../../components/Footer';
import { UseApi } from '../../ApiConf';
import { setCurrPage } from '../../Redux/reducer/User';
import { useDispatch, useSelector } from 'react-redux';
import Pagenation from '../../components/Pagenation';
import loader from '../../assets/Icons/loader.gif';

const Agents = () => {
    const { FetchData } = UseApi();
    const [agents, setAgents] = useState({ totalPage: 1, content: [] });
    const { currPage } = useSelector(state => state.User);
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        if (currPage > 1) {
            dispatch(setCurrPage(1));
        }
    }, []);

    useEffect(() => {
        getAgentsData();
    }, [currPage]);

    const getAgentsData = async () => {
        setLoading(true);
        let data;
        try {
            data = await FetchData(`agent-list?limit=8&page=${currPage}`, 'GET');
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
        if (data) {
            // console.log('footer data..',data);
            setAgents(data);
            setLoading(false);
        }
    }
    return (
        <div className=''>
            <Header />
            <div className='mt-16 px-2 mb-10 container mx-auto'>
                <div className='py-10'>
                    <div className='flex flex-wrap justify-between w-[90%]'>
                        <div className='mb-5'>
                            <p className={styles.title4}>Real Estate Agents</p>
                            <div className='text-sm mt-1 to-gray-300'>
                                <NavLink to='/' className={'hover:text-orange-700'}>Home</NavLink> / <span>Top Real Estate Agents</span>
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-2 mb-2'>
                            <span className='text-gray-600'>Available Properties:</span>
                            <div className='mb-2'>
                                <button className={'border-[1px] border-orange-500 text-orange-500 px-2 py-[2px] rounded-xl mr-2 text-sm'}>Sale(23945)</button>
                                <button className={'border-[1px] border-orange-500 text-orange-500 px-2 py-[2px] rounded-xl text-sm'}>Rent(24945)</button>
                            </div>
                        </div>
                        <div className='ml-[1%] relative group'>
                            <button className={styles.btn + ' border-gray-500 px-4'}>
                                All Agents
                                <DropdownIcon />
                            </button>
                            <div className={styles.dropdownMenu + 'pb-[0px]'}>
                                <div className={styles.dropdownItem}>All Agents</div>
                                <div className={styles.dropdownItem}>Agents for Rent</div>
                                <div className={styles.dropdownItem}>Agents for Buy</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-[2%] grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 min-h-screen'>
                    {agents.content?.map((item, index) => {
                        return (
                            <div key={index} className='shadow-md border-[1px] rounded flex flex-col justify-center items-center py-5'>
                                <div className='flex flex-col justify-center items-center'>
                                    <img alt='' src={item.profilePicture ? item.profilePicture : userIcon} className='h-[70px] w-[70px]' />
                                    <p className={styles.title4 + 'mt-1'}>{item.name}</p>
                                    <p className='text-gray-600'>{item.type}</p>
                                </div>
                                <span className={styles.btn + 'bg-green-600 text-white my-5'}>{item.businessTitle ? item.businessTitle : 'N/A'}</span>
                                <div className='mt-2 text-gray-600'>{item.salePropCount} Properties for <span className='text-orange-500 font-semibold'>Sale</span></div>
                                <div className='mt-2 text-gray-600'>{item.rentPropCount} Properties for <span className='text-orange-500 font-semibold'>Rent</span></div>
                                <NavLink to={`/${item.profile}`}
                                    className={'mt-5 sm:mt-8 bg-gray-700 px-4 py-1 border-[1px] text-white rounded-md cursor-pointer hover:bg-white hover:text-black hover:border-[1px] hover:border-black duration-500'}>
                                    View Profile
                                </NavLink>
                            </div>
                        )
                    })}
                    {loading && <div className="fixed top-[100px] right-1/2 flex justify-center items-center mt-16">
                        <img alt="Please wait.." title="Please wait.." src={loader} />
                    </div>}
                </div>
                {agents.content?.length && <Pagenation lastPage={agents.totalPage} />}
            </div>
            <TopCItiesFilter />
            <Footer />
        </div>
    );
}

export default Agents;
