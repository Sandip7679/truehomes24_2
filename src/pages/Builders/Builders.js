import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import buildersBgImage from '../../assets/images/buildersBg.jpg'
import { styles } from '../../Styles/Styles';
import GetCallBack from '../../components/GetCallBack';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import Footer from '../../components/Footer';
import { NavLink } from 'react-router-dom';
import { DropdownInput } from '../../components/PostProperty/PostPropertyComp';
import { setCurrPage } from '../../Redux/reducer/User';
import { useDispatch, useSelector } from 'react-redux';
import { UseApi } from '../../ApiConf';

const buildersData = [
  { name: 'Lodha Group', totalProjects: '162', onGoingProj: '118', Bhks: [{ type: '2,3 BHK Mumbai', }, { type: '1,2 BHK Thane' }] },
  { name: 'Lodha Group', totalProjects: '162', onGoingProj: '118', Bhks: [{ type: '2,3 BHK Mumbai', }, { type: '1,2 BHK Thane' }] },
  { name: 'Lodha Group', totalProjects: '162', onGoingProj: '118', Bhks: [{ type: '2,3 BHK Mumbai', }, { type: '1,2 BHK Thane' }] },
  { name: 'Lodha Group', totalProjects: '162', onGoingProj: '118', Bhks: [{ type: '2,3 BHK Mumbai', }, { type: '1,2 BHK Thane' }] },
  { name: 'Lodha Group', totalProjects: '162', onGoingProj: '118', Bhks: [{ type: '2,3 BHK Mumbai', }, { type: '1,2 BHK Thane' }] },
  { name: 'Lodha Group', totalProjects: '162', onGoingProj: '118', Bhks: [{ type: '2,3 BHK Mumbai', }, { type: '1,2 BHK Thane' }] },
  { name: 'Lodha Group', totalProjects: '162', onGoingProj: '118', Bhks: [{ type: '2,3 BHK Mumbai', }, { type: '1,2 BHK Thane' }] },
  { name: 'Lodha Group', totalProjects: '162', onGoingProj: '118', Bhks: [{ type: '2,3 BHK Mumbai', }, { type: '1,2 BHK Thane' }] },
  { name: 'Lodha Group', totalProjects: '162', onGoingProj: '118', Bhks: [{ type: '2,3 BHK Mumbai', }, { type: '1,2 BHK Thane' }] },
  { name: 'Lodha Group', totalProjects: '162', onGoingProj: '118', Bhks: [{ type: '2,3 BHK Mumbai', }, { type: '1,2 BHK Thane' }] },
  { name: 'Lodha Group', totalProjects: '162', onGoingProj: '118', Bhks: [{ type: '2,3 BHK Mumbai', }, { type: '1,2 BHK Thane' }] },

];

const topBuildersData = [
  { name: 'Lodha Codename Never Before', project: '162' },
  { name: 'Godrej Ananda', project: '117' },
  { name: 'Mahindra Luminare Phase 2', project: '105' },
  { name: 'Sobha Winchester', project: '88' },
  { name: 'India Builders Mithila', project: '85' },
  { name: 'Prestige Green Gables', project: '80' },
  { name: 'Eldeco Live By The Greens', project: '75' },
  { name: 'Purva Atmosphere', project: '68' },
  { name: 'Omaxe The Legends', project: '55' },
  { name: 'Hiranandani Castle Rock', project: '54' },
  { name: 'Lodha Codename Never Before', project: '50' },
  { name: 'Lodha Codename Never Before', project: '42' },
];

const builderGallery = ['Builder Gallery', 'Builder Gallery in Kolkata',]

const Builders = () => {

  const { FetchData } = UseApi();
  const [builders, setBuilders] = useState([]);
  const { currPage } = useSelector(state => state.User);
  const dispatch = useDispatch();
  useEffect(() => {
    if (currPage > 1) {
      dispatch(setCurrPage(1));
    }
  }, []);

  useEffect(() => {
    getBuildersData();
  }, [currPage]);

  const getBuildersData = async () => {
    let data;
    try {
      data = await FetchData(`real-estate-builders-in-india`, 'GET');
    } catch (err) {
      console.log(err);
    }
    if (data) {
      console.log('builders data..', data);
      setBuilders(data?.Builders);
    }
  }

  return (
    <div className=''>
      <Header />
      <div className=' fixed top-0 h-full w-full'>
        <img alt='' src={buildersBgImage} className='h-full' />
      </div>
      <div className='fixed h-full mb-2 w-full bg-black bg-opacity-50 overflow-y-scroll'>
        <div>
          <div className='mt-[150px] h-[100px] z-[200]'>
            <p className={'text-center text-2xl sm:text-3xl text-white font-semibold tracking-wider md:text-4xl'}>Real Estate Builders</p>
          </div>
          <div className='mt-10 pt-10 min-h-[500px] bg-white'>
            <div className='container mx-auto px-2'>
              <div className='flex flex-wrap mx-auto gap-5 justify-between'>
                <DropdownInput options={builderGallery} placeholder={'Builder Gallery'} inputClass={'w-full sm:w-[30%] min-w-[150px] h-10'} />
                <div className='flex min-w-[250px] w-full sm:w-[45%]'>
                  <input placeholder='Type a builder name here' className={styles.input + 'border-r-0 pl-6'} />
                  <button className={styles.btn + styles.btnBlackHover + ' border-gray-700 rounded-none md:w-[25%] bg-gray-700 text-white items-center'}>
                    Search
                  </button>
                </div>
              </div>
              {/* (index == 0 ? 'md:order-first lg:order-none' : index == 1 ? 'lg:-order-first' : '') + */}
              <div className='mt-16 pb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {/* <GetCallBack /> */}
                {builders?.length > 0 && builders?.map((item, index) => {
                  return (
                    <>
                      {index == 2 && <GetCallBack />}
                      <div className={(index == 1 ? 'md:order-last lg:order-none' : '') + ' shadow-xl rounded-sm border-[1px] pb-10 px-4'}>
                        <div className='py-8'>
                          <p className={styles.title3 + 'text-orange-600'}>{item.builderName}</p>
                        </div>
                        <div className=' flex flex-wrap gap-5 border-y-[1px] -mx-4 px-4 pb-16 pt-3'>
                          <div className='flex gap-1 tracking-wide justify-center items-center'>
                            <span className='text-gray-600 opacity-85 text-sm sm:text-base font-semibold rounded-full border-orange-500 border-[1px] p-1 flex min-h-8 min-w-8 items-center justify-center'>
                              {item.totalProject}
                            </span>
                            <p className={styles.textMedium}>Total Projects</p>
                          </div>
                          <div className='flex gap-1 tracking-wide justify-center items-center'>
                            <span className='text-gray-600 opacity-85 text-sm sm:text-base font-semibold rounded-full border-orange-500 border-[1px] p-1 min-h-8 min-w-8 flex items-center justify-center'>
                              {item.ongoingProject}
                            </span>
                            <p className={styles.textMedium}>Ongoing Projects</p>
                          </div>
                        </div>

                        <div className='my-7'>
                          <p className='text-gray-700'>Projects by {item.builderName}</p>
                          <div className='flex gap-4 mt-5'>
                            {item.builderProps.map((itm, ind) => {
                              return (
                                <>
                                  {ind < 2 && <div className='w-[110px]'>
                                    <img alt='' src={itm.banner} className='h-[110px] w-full' />
                                    <p className='text-xs truncate text-gray-600'>{itm.testBelowBanner}</p>
                                  </div>}
                                </>

                              )
                            })}

                           {item.totalProject > 2 && <NavLink to={`/${item.link}`} className='flex flex-col h-[110px] group justify-center items-center p-2 px-6 shadow-md border-[1px] rounded hover:text-white hover:bg-orange-600 hover:bg-opacity-85'>
                              <p className='text-sm'>View</p>
                              <p className='font-semibold text-lg group-hover:text-white text-orange-600 my-2'>{item.totalProject-2}</p>
                              <p className='text-sm'>more</p>
                            </NavLink>}
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })}
              </div>
              <div className='border-[1px] border-gray-300 w-full lg:w-[90%] p-[2%] mt-14'>
                <div className='border-b-2 border-gray-200'>
                  <p className={styles.title2 + 'py-5 text-center'}>Top Builders in India</p>
                  <div className='flex justify-between font-semibold py-2'>
                    <p className='text-gray-700 w-[50%]'>Builder</p>
                    <p className='text-gray-700 w-[50%] text-center'>Total Projects</p>
                  </div>
                </div>
                <div>
                  {topBuildersData.map((item, index) => {
                    return (
                      <div key={index} className='flex justify-between py-2'>
                        <p className='w-[50%]'>{item.name}</p>
                        <p className='w-[50%] text-center text-gray-500'>{item.project}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <TopCItiesFilter />
            <Footer />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Builders;
