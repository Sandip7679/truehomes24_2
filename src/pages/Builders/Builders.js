import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import buildersBgImage from '../../assets/images/buildersBg.jpg'
import { styles } from '../../Styles/Styles';
import GetCallBack from '../../components/GetCallBack';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import Footer from '../../components/Footer';
import { NavLink } from 'react-router-dom';
import { DropdownInput } from '../../components/PostProperty/PostPropertyComp';
import { UseApi } from '../../ApiConf';
import Pagenation from '../../components/Pagenation';
import { useSelector } from 'react-redux';
import loader from '../../assets/Icons/loader.gif';


const builderGallery = ['Builder Gallery', 'Builder Gallery in Kolkata',]

const Builders = () => {

  const { FetchData } = UseApi();
  const [builders, setBuilders] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [topBuilders, setTopBuilders] = useState([]);
  // const {currLocation} = useSelector(state=>state.User);
  const [currlocation, setLocation] = useState('');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getBuildersData();
  }, [currPage]);
  useEffect(() => {
    getTopBuilders();
  }, []);

  const getBuildersData = async () => {
    setLoading(true);
    let data;
    try {
      data = await FetchData(`real-estate-builders?limit=23`, 'GET');
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
    if (data) {
      console.log('builders data..', data);
      setBuilders(data?.Builders);
      setLoading(false);
    }
  }

  const getTopBuilders = async () => {
    let data;
    try {
      data = await FetchData(`real-estate-builders?city=${currlocation}&for_home=1&limit=10`, 'GET');
    } catch (err) {
      console.log(err);
    }
    if (data?.content) { setTopBuilders(data.content) }
  }

  return (
    <div className=''>
      <Header />
      <div className=' fixed top-0 h-full w-full'>
        <img alt='' src={buildersBgImage} className='h-full' />
      </div>
      {loading && <div className="fixed top-[400px] z-50 right-1/2 flex justify-center items-center">
        <img alt="Please wait.." title="Please wait.." src={loader} />
      </div>}
      <div className='fixed h-full mb-2 w-full bg-black bg-opacity-50 overflow-y-scroll'>
        <div className=''>
          <div className='mt-[150px] h-[100px] z-[200]'>
            <p className={'text-center text-2xl sm:text-3xl text-white font-semibold tracking-wider md:text-4xl'}>Real Estate Builders</p>
          </div>
          <div className={'mt-10 pt-10 min-h-[500px] bg-white'}>
            <div className={'container mx-auto px-2 '+(loading && ' opacity-70')}>
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
              <div className='mt-16 pb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 min-h-[300px]'>
                {/* <GetCallBack /> */}
                {builders?.length > 0 && builders?.map((item, index) => {
                  return (
                    <>
                      {index == 2 && <GetCallBack />}
                      <div className={(index == 1 ? 'md:order-last lg:order-none' : '') + ' shadow-xl rounded-sm border-[1px] pb-10 px-4'}>
                        <div className='py-8'>
                          <NavLink to={`/${item.link}`} className={styles.title3 + 'text-orange-600'}>{item.builderName}</NavLink>
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
                                  {ind < 2 && <NavLink to={`/${itm.link}`} className='w-[110px]'>
                                    <img alt='' src={itm.banner} className='h-[110px] w-full' />
                                    <p className='text-xs truncate text-gray-600'>{itm.testBelowBanner}</p>
                                  </NavLink>}
                                </>
                              )
                            })}

                            {item.totalProject > 2 && <NavLink to={`/${item.link}`} className='flex flex-col h-[110px] group justify-center items-center p-2 px-6 shadow-md border-[1px] rounded hover:text-white hover:bg-orange-600 hover:bg-opacity-85'>
                              <p className='text-sm'>View</p>
                              <p className='font-semibold text-lg group-hover:text-white text-orange-600 my-2'>{item.totalProject - 2}</p>
                              <p className='text-sm'>more</p>
                            </NavLink>}
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })}
              </div>

              {/* {builders.length > 0 && <Pagenation lastPage={} changeCurrPage={(page) => setCurrPage(page)} />} */}

              <div className='border-[1px] border-gray-300 w-full lg:w-[90%] p-[2%] mt-14'>
                <div className='border-b-2 border-gray-200'>
                  <p className={styles.title2 + 'py-5 text-center'}>Top Builders in India</p>
                  <div className='flex justify-between font-semibold py-2'>
                    <p className='text-gray-700 w-[50%]'>Builder</p>
                    <p className='text-gray-700 w-[50%] text-center'>Total Projects</p>
                  </div>
                </div>
                <div>
                  {topBuilders.map((item, index) => {
                    return (
                      <div key={index} className='flex justify-between py-2'>
                        <NavLink to={`/${item.link}`} className='w-[50%]'>{item.title}</NavLink>
                        <p className='w-[50%] text-center text-gray-500'>{item.totalProject}</p>
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
