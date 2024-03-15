import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import buildersBgImage from '../../assets/images/buildersBg.jpg'
import { styles } from '../../Styles/Styles';
import GetCallBack from '../../components/GetCallBack';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import Footer from '../../components/Footer';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import { UseApi } from '../../ApiConf';
import Pagenation from '../../components/Pagenation';
import loader from '../../assets/Icons/loader.gif';
import { useDispatch, useSelector } from 'react-redux';
import { setBuilderSearchStatus } from '../../Redux/reducer/User';

const Builders = (props) => {

  const { FetchData } = UseApi();
  const dispatch = useDispatch();
  const { builderSearchStatus } = useSelector(state => state.User);
  const [builders, setBuilders] = useState([]);
  const [builderNames, setBuilderNames] = useState([]);
  const [curIndex, setCurrIndex] = useState(null);
  const [allCities, setAllCities] = useState([]);
  const pageRef = useRef();
  const searchMenu = useRef();
  const searchInput = useRef();
  const cityDropdown = useRef();
  const [currPage, setCurrPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [topBuilders, setTopBuilders] = useState([]);
  const location = useLocation();
  const [currlocation, setLocation] = useState('');
  const [loading, setLoading] = useState(true);
  const [showError, setShowError] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  // const {india} = useParams();
  useEffect(() => {
    if (!showError) {
      getBuildersData();
    }
  }, [currPage, builderSearchStatus.cityPath]);
  useEffect(() => {
    getTopBuilders();
    // pageRef?.current?.addEventListener('click', closeSections);
    pageRef?.current?.addEventListener('click', (e) => {
      if (!searchMenu?.current?.contains(e.target) && !searchInput?.current?.contains(e.target)) {
        setShowResults(false);
      }
      if (!searchInput?.current?.contains(e.target)) {
        // setSearchStatus(pre => ({ ...pre, showError: false }));
        // dispatch(setBuilderSearchStatus({ ...builderSearchStatus, showError: false }));
        setShowError(false);
      }
    });
  }, []);

  // const closeSections = (e) => {
  //   if (!searchMenu?.current?.contains(e.target) && !searchInput?.current?.contains(e.target)) {
  //     // setBuilderNames([]);
  //     if (showResults) {
  //       // setSearchStatus(pre => ({ ...pre, showResults: false }));
  //       // dispatch(setBuilderSearchStatus({ ...builderSearchStatus, showResults: false }));
  //       setShowResults(false);
  //     }
  //   }
  //   if (!searchInput?.current?.contains(e.target)) {
  //     // setSearchStatus(pre => ({ ...pre, showError: false }));
  //     // dispatch(setBuilderSearchStatus({ ...builderSearchStatus, showError: false }));
  //     setShowError(false);
  //   }
  // }

  useEffect(() => {
    console.log('searchStatus.quary...', builderSearchStatus);
    if (showResults && builderSearchStatus.quary) {
      let clearTime = setTimeout(() => {
        getBuilderNames();
      }, 300)
      return () => clearTimeout(clearTime);
    }
    if (builderSearchStatus.quary == '') {
      // setSearchStatus(pre => ({ ...pre, showResults: false, name: '' }));
      dispatch(setBuilderSearchStatus({ ...builderSearchStatus, showResults: false, name: '' }));
      setShowResults(false);
      setBuilderNames([]);
      setCurrIndex(null);
    }
  }, [builderSearchStatus.quary]);

  const getBuilderNames = async () => {
    let data;
    try {
      data = await FetchData(`real-estate-builders?is_autocomplete=1&city=${builderSearchStatus.city}&search=${builderSearchStatus.quary}`, 'GET');
    } catch (err) {
      console.log('err... data..', err);
    }
    if (data?.length > 0) {
      console.log('searchdata...', data);
      setBuilderNames(data);
      setCurrIndex(null);
    }
  }

  const getBuildersData = async () => {
    setLoading(true);
    console.log('searchstaus..', builderSearchStatus);
    let data;
    try {
      data = await FetchData(`real-estate-builders?page=${currPage}&limit=23&city=${builderSearchStatus.city}&builder=${builderSearchStatus.name}&get_dropdown=${allCities.length > 0 ? '' : '1'}`, 'GET');
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
    if (data) {
      console.log('builders data..', data);
      setBuilders(data?.Builders);
      setTotalPage(data?.totalPage);
      if (data?.dropdownData.length > 0) {
        setAllCities(data?.dropdownData);
      }
      if (builderSearchStatus.city) {
        let cityPath = builderSearchStatus.cityName.toLowerCase().replace(/ /g, "-");
        let builderPath = builderSearchStatus.name ? (builderSearchStatus?.quary?.toLowerCase().replace(/ /g, "-") + '-') : ''
        dispatch(setBuilderSearchStatus({
          ...builderSearchStatus,
          cityPath: cityPath,
          builderPath: builderPath
        }));
        let path = '/' + `${builderPath}` + 'real-estate-builders-in-' + cityPath;
        navigate(path, { state: builderSearchStatus });
      }
      setLoading(false);
    }
  }

  const onSearchInputKeyPress = (event) => {
    if (!showResults) return;
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (curIndex !== null && curIndex < builderNames.length - 1) {
        setCurrIndex(curIndex + 1);
      }
      else if (!curIndex) {
        setCurrIndex(0);
      }

    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (curIndex > 0) {
        setCurrIndex(curIndex - 1);
      }
    } else if (event.key === 'Enter') {
      if (builderNames.length > 0 && curIndex !== null) {
        // setSearchStatus({ ...searchStatus, name: builderNames[curIndex]?.value, quary: builderNames[curIndex]?.label, showResults: false });
        dispatch(setBuilderSearchStatus({ ...builderSearchStatus, name: builderNames[curIndex]?.value, quary: builderNames[curIndex]?.label, showResults: false }));
        setShowResults(false);
        setCurrIndex(null);
      }
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
    <div ref={pageRef} className=''>
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
            <p className={'text-center text-2xl sm:text-3xl text-white font-semibold tracking-wider md:text-4xl'}>
              {builderSearchStatus.name ? builderSearchStatus.quary : ''} Real Estate Builders {builderSearchStatus.cityName ? `in ${builderSearchStatus.cityName}` : ''}
            </p>
          </div>
          <div className={'mt-10 pt-10 min-h-[500px] bg-white'}>
            <div className={'container mx-auto px-2 ' + (loading && ' opacity-70')}>
              <div className='flex flex-wrap mx-auto gap-5 justify-between'>
                {/* <DropdownInput options={builderGallery} placeholder={'Builder Gallery'} inputClass={'w-full sm:w-[30%] min-w-[150px] h-10'} /> */}
                <div className='w-full sm:w-[30%] min-w-[150px] h-10'>
                  {/* {console.log('first..', JSON.stringify({ cityID: builderSearchStatus.city, cityName: builderSearchStatus.cityName }))} */}
                  {console.log('builderSearchStatus.selectedCityOption..', builderSearchStatus.selectedCityOption)}
                  <select ref={cityDropdown} name="" className={styles.input + 'mt-1 text-gray-500 '}
                    // value={builderSearchStatus.selectedCityOption}
                    value={builderSearchStatus.selectedCityOption}
                    onChange={(e) => {
                      let value = JSON.parse(e.target.value);
                      console.log('value..', value);
                      console.log('value?.cityID..', value?.cityID);
                      // setSearchStatus(pre => ({ ...pre, city: value?.cityID, cityName: value?.cityName, name: '', quary: '', selectedCityOption: e.target.value }));
                      dispatch(setBuilderSearchStatus({ ...builderSearchStatus, city: value?.cityID, cityName: value?.cityName, name: '', quary: '', selectedCityOption: e.target.value }));
                      // setSelectedCityOption(e.target.value);
                    }}
                  >
                    <option value={JSON.stringify({ cityID: '', cityName: '' })}>Builder Gallery</option>
                    {allCities?.map((item, index) => {
                      return (
                        <option key={index} className='text-sm sm:text-base text-gray-500' value={JSON.stringify(item)}>Builder Gallery in {item.cityName}</option>
                      )
                    })}
                  </select>
                </div>
                <div className='min-w-[250px] w-full sm:w-[45%]'>
                  <div className='relative flex'>
                    <input
                      ref={searchInput}
                      placeholder='Type a builder name here'
                      className={styles.input + 'border-r-0 pl-6'}
                      value={builderSearchStatus.quary}
                      onChange={(e) => {
                        // setSearchStatus(pre => ({ ...pre, quary: e.target.value, showResults: true }));
                        dispatch(setBuilderSearchStatus({ ...builderSearchStatus, quary: e.target.value, showResults: true }));
                        setShowResults(true);
                      }}
                      onKeyDown={onSearchInputKeyPress}
                      onClick={() => {
                        console.log('!searchStatus.city...', !builderSearchStatus.city, 'builderSearchStatus.city..', builderSearchStatus.city);
                        if (!builderSearchStatus.city) {
                          // setSearchStatus(pre => ({ ...pre, showResults: false, showError: true }));
                          // dispatch(setBuilderSearchStatus({ ...builderSearchStatus, showResults: false, showError: true }));
                          setShowError(true);
                          setShowResults(false);
                        }
                        else if (builderSearchStatus.quary?.length > 0 && !showResults) {
                          // setSearchStatus(pre => ({ ...pre, showResults: true, showError: false }));
                          // dispatch(setBuilderSearchStatus({ ...builderSearchStatus, showResults: true, showError: false }));
                          setShowResults(true);
                          setShowError(false);
                          getBuilderNames();
                        }
                        // if (!searchStatus.showResults) { setSearchStatus(pre=>({...pre,showResults:true}))}
                      }}
                    />
                    <button
                      onClick={() => {
                        // console.log('searchStatus.city..', builderSearchStatus.city, 'builderSearchStatus.showError...', builderSearchStatus.showError);
                        if (!showError) {
                          if (currPage == 1) {
                            getBuildersData();
                          } else {
                            setCurrPage(1);
                          }
                          // if (currPage > 1) {
                          //   setCurrPage(1);
                          // }
                        }
                      }}
                      className={styles.btn + styles.btnBlackHover + ' border-gray-700 rounded-none md:w-[25%] bg-gray-700 text-white items-center'}>
                      Search
                    </button>
                    {console.log('showresut...2',showResults)}
                    {showResults && <div
                      ref={searchMenu} className={(builderNames.length > 0 ? 'border-[1px] border-gray-500' : '') + ' shadow-lg absolute top-12 bg-white rounded max-h-[320px] z-10 w-[300px] sm:w-[450px] overflow-auto'}>
                      {builderNames?.map((item, index) => {
                        return (
                          <div
                            onClick={() => {
                              // setSearchStatus({ ...searchStatus, name: item.value, quary: item.label, showResults: false });
                              dispatch(setBuilderSearchStatus({ ...builderSearchStatus, name: item.value, quary: item.label, showResults: false }));
                              setShowResults(false);
                            }}
                            className={(index == curIndex && 'bg-blue-500 text-white') + ' flex gap-2 p-2 pl-4 hover:bg-blue-500 hover:text-white cursor-pointer'}>
                            {/* <div>
                          <img src={item.picture} className='h-6 w-6 mt-2' />
                        </div> */}
                            <div>
                              <p>{item.label}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>}
                  </div>
                  {<p className={(showError ? 'text-red-600' : 'text-white') + ' text-sm'}>Please select a city !</p>}
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

              {builders.length > 0 && <Pagenation lastPage={totalPage} changeCurrPage={(page) => setCurrPage(page)} />}

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
