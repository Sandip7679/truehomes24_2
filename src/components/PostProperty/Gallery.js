import React, { useRef, useState } from 'react';
import { CategoryTitle } from './PostPropertyComp';
import { styles } from '../../Styles/Styles';
import { NavLink } from 'react-router-dom';

const Gallery = () => {

  const [files, setFiles] = useState([]);
  // const [selectedFile,setSelectedFile] = useState(null);
  const [imgSrcs, setImgSrcs] = useState([]);
  const inputRef = useRef(null);
  const [checked, setChecked] = useState(false);

  const handleDeleteFile = (index) => {

    if (files.length === 1) {
      inputRef.current.value = null
    }
    setFiles([...files.slice(0, index), ...files.slice(index + 1)]);
    setImgSrcs([...imgSrcs.slice(0, index), ...imgSrcs.slice(index + 1)]);
  }

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      let file = e.target.files[0];
      setFiles([...files, file]);
      const reader = new FileReader();
      reader.onload = () => {
        setImgSrcs([...imgSrcs, reader.result]);
      }
      reader.readAsDataURL(file);
    }

  }

  return (
    <form className={styles.formCard}>
      <div>
        <CategoryTitle title={'Gallery : Allow max photo upload - 15'} icon={'fa-regular fa-file-image'} />
        <div className='border-dashed border-gray-600 border-[1px]'>
          <input accept='image/*' ref={inputRef} type='file' onChange={handleFileChange} className='w-[80%] absolute opacity-0 py-14 cursor-pointer' />
          <div className='text-gray-400 flex flex-col items-center justify-center py-10 text-cente'>
            <i class="fa-solid fa-cloud-arrow-up text-4xl"></i>
            <p className=''>Click here to upload your images. Max file size of 5 MB is allowed.</p>
          </div>
        </div>
        <div className='mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-3 sm:gap-5'>
          {imgSrcs.map((item, index) => {
            return (
              <div key={index} className='relative'>
                <img src={item} alt="Selected File" className='h-28 w-full' />
                <i onClick={() => handleDeleteFile(index)}
                  class="fa-solid fa-circle-xmark absolute -top-2 text-red-600 bg-white rounded-full -right-2 cursor-pointer"></i>
              </div>
            )
          })}
        </div>
        <div>
          <div className='flex mt-5 text-gray-700 p-3 -mx-[1.6%]'>
            <i class="fa-solid fa-video text-lg mt-[2px] mr-2"></i>
            <span className={styles.title3}>Video:</span>
          </div>
          <input className={styles.input} type='file' accept='video/*' />
          <div className={'text-gray-500 text-sm mt-1'}>
            <p>Allowed File type: MP4</p>
            <p>Max Size Limit: 50 MB</p>
          </div>
        </div>
        <div className='mt-5'>
          <label className='flex'>
            <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)} className='size-5 mt-2 flex-none mr-2' />
            <p>I am the owner/I have the authority to post this property. I agree not to provide incorrect property information or state as a discrimination performance.
              In case the information does not comply with truehomes24, truehomes24 has the right to edit remove the property from their site.</p>
          </label>
        </div>
        <div className='mt-5 flex gap-5'>
          <button className={styles.formBtn}>Back</button>
          <NavLink to={'/add-packages'}>
            <button type='submit' disabled={!checked} className={styles.formBtn + (checked ? '' : ' bg-gray-500')}>Save & Payment</button>
          </NavLink>
        </div>
      </div>
    </form>
  );
}

export default Gallery;
