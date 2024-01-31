import React from 'react';
import Header from '../../components/Header/Header';
import buildersBgImage from '../../assets/images/buildersBg.jpg'
import { styles } from '../../Styles/Styles';
import DropdownIcon from '../../components/svgIcons';
import GetCallBack from '../../components/GetCallBack';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import Footer from '../../components/Footer';

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

const Builders = () => {
  return (
    <div>
      <Header />
      <div className=' fixed top-0 h-full w-full'>
        {/* <img src='https://www.truehomes24.com/assets/front_end/images/breadcrumb/breadcrumb_1.jpg' className='h-[300px] w-[300px]' /> */}
        <img alt='' src={buildersBgImage} className='h-full' />
      </div>
      <div className='fixed h-full mb-2 w-full bg-black bg-opacity-50 overflow-y-scroll'>
        <div>
          <div className='mt-[150px] h-[100px] z-[200]'>
            <p className={'text-center text-2xl sm:text-3xl text-white font-semibold tracking-wider md:text-4xl'}>Real Estate Builders</p>
          </div>
          <div className='mt-10 pt-10 min-h-[500px] bg-white'>
            <div className='flex flex-wrap px-[10%] gap-5 justify-between'>
              <button className={styles.btn + 'w-[30%] min-w-[150px] py-[6px] rounded-none items-center pl-5 justify-between'}>
                Builder Galary
                <DropdownIcon />
              </button>
              <div className='flex min-w-[250px] w-[45%]'>
                <input placeholder='Type a builder name here' className={styles.input + 'border-r-0 pl-6'} />
                <button className={styles.btn+styles.btnBlackHover + ' border-gray-700 rounded-none md:w-[25%] bg-gray-700 text-white items-center'}>
                  Search
                </button>
              </div>

            </div>
            <div className='mt-16 pb-5 flex flex-wrap gap-5 items-center pl-[10%]'>
              {buildersData.map((item, index) => {
                return (
                  <>
                    {index === 2 ?
                      <GetCallBack />
                      :
                      <div className='shadow-xl rounded-sm border-[1px] pb-10 px-4 w-[90%] max-w-[360px] md:min-w-[360px] md:w-[32%]'>
                        <div className='py-8'>
                          <p className={styles.title3 + 'text-orange-600'}>{item.name}</p>
                        </div>
                        <div className=' flex flex-wrap gap-5 border-y-[1px] -mx-4 px-4 pb-16 pt-3'>
                          <div className='flex gap-1 tracking-wide justify-center items-center'>
                            <span className='text-gray-600 opacity-85 text-sm sm:text-base font-semibold rounded-full border-orange-500 border-[1px] p-1'>
                              {item.totalProjects}
                            </span>
                            <p className={styles.textMedium}>Total Projects</p>
                          </div>
                          <div className='flex gap-1 tracking-wide justify-center items-center'>
                            <span className='text-gray-600 opacity-85 text-sm sm:text-base font-semibold rounded-full border-orange-500 border-[1px] p-1'>
                              {item.totalProjects}
                            </span>
                            <p className={styles.textMedium}>Total Projects</p>
                          </div>
                        </div>

                        <div className='my-7'>
                          <p className='text-gray-700'>Projects by {item.name}</p>
                          <div className='flex gap-4 mt-5'>
                            <div className='w-[95px]'>
                              <img alt='' src='https://www.truehomes24.com/assets/new-projects/banner-01/Goyal-Orchid-Whitefield1.webp' className='h-[100px] w-full' />
                              <p className='text-xs'>{item.Bhks[0].type}</p>
                            </div>
                            <div className='w-[95px]'>
                              <img alt='' src='https://www.truehomes24.com/assets/new-projects/banner-01/lodhacrown1.webp' className='h-[100px] w-full' />
                              <p className='text-xs'>{item.Bhks[1].type}</p>
                            </div>
                            <button className='flex flex-col h-[100px] group justify-center items-center p-2 px-6 shadow-md border-[1px] rounded hover:text-white hover:bg-orange-600 hover:bg-opacity-85'>
                              <p className='text-sm'>View</p>
                              <p className='font-semibold text-lg group-hover:text-white text-orange-600 my-2'>115</p>
                              <p className='text-sm'>more</p>
                            </button>
                          </div>
                        </div>
                      </div>}
                  </>
                )
              })}
            </div>
            <div className='border-[1px] border-gray-300 w-[90%] p-[2%] mt-14 mx-[5%]'>
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
            <TopCItiesFilter />
            <Footer />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Builders;
