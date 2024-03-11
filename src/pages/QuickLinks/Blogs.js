import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import BgImage from '../../assets/images/buildersBg.jpg'
import { NavLink } from 'react-router-dom';
import { styles } from '../../Styles/Styles';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import Footer from '../../components/Footer';
import { UseApi } from '../../ApiConf';
import { useSelector } from 'react-redux';
import Pagenation from '../../components/Pagenation';
import loader from '../../assets/Icons/loader.gif';


const Blogs = () => {

  const { FetchData } = UseApi();
  const [blogs, setBlogs] = useState({ totalPage: 1, content: [] });
  const [currPage,setCurrPage] = useState(1);
  const { currLocation } = useSelector(state => state.User);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogsData();
  }, [currPage, currLocation.code]);

  const getBlogsData = async () => {
    setLoading(true);
    let data;
    try {
      data = await FetchData(`blogs?page=${currPage}&limit=8&city=${currLocation.code}`, 'GET');
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
    if (data) {
      console.log('blogs data..', data);
      setBlogs({ totalPage: data.totalPage, content: data.content });
      setLoading(false);
    }
  }

  return (
    <div className=''>
      <Header />
      <div className={loading && 'opacity-70'}>
        <div className=' fixed left-0 top-0 h-screen w-screen'>
          <img alt='' src={BgImage} className='h-full' />
        </div>
        <div className='fixed left-0 h-full mb-2 w-full bg-black bg-opacity-50 overflow-y-scroll'>
          <div>
            <div className='mt-[150px] h-[100px] z-[200] text-center text-white tracking-widest'>
              <p className={'text-center text-2xl sm:text-3xl text-white font-semibold tracking-wider md:text-3xl'}>All Blogs</p>
              <div className='mt-5 text-xs lg:text-sm'>
                <NavLink to={'/'}>HOME</NavLink> / <span>BLOGS</span>
              </div>
            </div>
            <div className='mt-10 pt-10 min-h-[500px] bg-white'>
              <div className='container mx-auto px-2 pb-10 sm:px-5'>
                {loading && <div className="fixed top-[300px] right-1/2 flex justify-center items-center mt-16">
                  <img alt="Please wait.." title="Please wait.." src={loader} />
                </div>}
                <div className='grid gap-2 sm:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 min-h-screen'>
                  {blogs.content.map((item, index) => {
                    return (
                      <div key={index} className=' rounded-md shadow-lg border-[1px] h-full group tracking-wider'>
                        <NavLink to={'/blog-detail'}>
                          <div className='relative items-center rounded-t-md overflow-hidden hover:cursor-pointer'>
                            <img alt='' src={item.cover_url}
                              className='h-[170px] w-full transform transition-transform hover:scale-110 duration-1000'
                            />
                          </div>
                        </NavLink>

                        <div className='relative p-3 text-left border-b-[1px] min-h-[120px] border-gray-300'>
                          <p className='text-sm'>{item.about}</p>
                          <p className={styles.title4 + 'my-2 line-clamp-2'}>{item.title}</p>
                        </div>
                        <div className='px-3 pb-3 py-2 flex justify-between text-sm text-gray-600'>
                          <p>Posted On: {item.posted_on}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
                {blogs.content?.length > 0 && <Pagenation lastPage={blogs.totalPage} changeCurrPage={(page)=>setCurrPage(page)} />}
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

export default Blogs;
