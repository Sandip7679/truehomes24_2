import React from 'react';
import { CategoryTitle } from './PostPropertyComp';
import { styles } from '../../Styles/Styles';

const Gallery = () => {
  return (
    <form className={styles.formCard}>
      <div>
        <CategoryTitle title={'Gallery : Allow max photo upload - 15'} icon={'fa-regular fa-file-image'} />
        <div className='relative border-dashed border-gray-600 border-[1px]'>
          <input type='file' className='py-10 w-full opacity-0 cursor-pointer' />
           <div className='absolute  top-2 left-[32%] text-gray-400 text-center'>
              <i class="fa-solid fa-cloud-arrow-up text-4xl"></i>
              <p className=''>Click here to upload your images, Max file size 5 MB allowed.</p>
          </div>
        </div>
      </div>

    </form>
  );
}

export default Gallery;
