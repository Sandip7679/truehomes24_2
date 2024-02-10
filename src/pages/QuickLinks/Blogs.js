import React from 'react';
import Header from '../../components/Header/Header';
import BgImage from '../../assets/images/buildersBg.jpg'
import { NavLink } from 'react-router-dom';
import { styles } from '../../Styles/Styles';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import Footer from '../../components/Footer';

const blogsData = [
  {
    title: 'Important RERA Rajasthan Facts For Home..',
    type: 'Projects',
    postedOn: 'September 24, 2022 10:16 PM',
    image: "https://www.truehomes24.com/assets/properties/banner-01/6fbc57095a08783a071945a3507844fa.webp",
  },
  {
    title: 'Important RERA Rajasthan Facts For Home..',
    type: 'Projects',
    postedOn: 'September 24, 2022 10:16 PM',
    image: "https://www.truehomes24.com/assets/properties/banner-02/6195f1a4b44efe4bd85420205df57e4a.webp",
  },
  {
    title: 'Important RERA Rajasthan Facts For Home..',
    type: 'Projects',
    postedOn: 'September 24, 2022 10:16 PM',
    image: "https://www.truehomes24.com/assets/properties/banner-02/3fa85544ffca6abb5843dd1aeedf1c73.webp",
  },
  {
    title: 'Important RERA Rajasthan Facts For Home..',
    type: 'Projects',
    postedOn: 'September 24, 2022 10:16 PM',
    image: "https://www.truehomes24.com/assets/properties/banner-02/93a4b41ca5c17860d1b44af1f032afa9.webp",
  },
  {
    title: 'Important RERA Rajasthan Facts For Home..',
    type: 'Projects',
    postedOn: 'September 24, 2022 10:16 PM',
    image: "https://www.truehomes24.com/assets/properties/banner-01/6fbc57095a08783a071945a3507844fa.webp",
  },
  {
    title: 'Important RERA Rajasthan Facts For Home..',
    type: 'Projects',
    postedOn: 'September 24, 2022 10:16 PM',
    image: "https://www.truehomes24.com/assets/properties/banner-01/6fbc57095a08783a071945a3507844fa.webp",
  },
  {
    title: 'Important RERA Rajasthan Facts For Home..',
    type: 'Projects',
    postedOn: 'September 24, 2022 10:16 PM',
    image: "https://www.truehomes24.com/assets/properties/banner-01/6fbc57095a08783a071945a3507844fa.webp",
  },
];

const Blogs = () => {
  return (
    <div className='container mx-auto'>
      <Header />
      <div >
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
              <div className='px-2 sm:px-[10%] grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                {blogsData.map((item, index) => {
                  return (
                    <div key={index} className=' rounded-md shadow-lg border-[1px] h-full group tracking-wider'>
                      <NavLink to={'/blog-detail'}>
                        <div className='relative items-center rounded-t-md overflow-hidden hover:cursor-pointer'>
                          <img alt='' src={item.image}
                            className='h-[170px] w-full transform transition-transform hover:scale-110 duration-1000'
                          />
                        </div>
                      </NavLink>

                      <div className='relative p-3 text-left border-b-[1px] border-gray-300'>
                        <p className='text-sm'>{item.type}</p>
                        <p className={styles.title4}>{item.title}</p>
                      </div>
                      <div className='px-3 pb-3 py-2 flex justify-between text-sm text-gray-600'>
                        <p>Posted On: {item.postedOn}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <TopCItiesFilter/>
              <Footer/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
