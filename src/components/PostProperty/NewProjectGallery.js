import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '../../Styles/Styles';
import { setPostPropertyFormData } from '../../Redux/reducer/User';
import { toast } from 'react-toastify';

const NewProjectGallery = ({setCurrCategory}) => {
    const [animation, setAnimation] = useState(false);
    // const [files, setFiles] = useState([]);
    // const [selectedFile,setSelectedFile] = useState(null);
    // const [imgSrcs, setImgSrcs] = useState([]);
    const [allFiles, setAllFiles] = useState({ propertyImg: [], floorPlanImg: [], masterPlanImg: [], routeMapImg: [] });
    const [allImgSrc, setAllImgSrc] = useState({ propertyImgScr: [], floorPlanImgScr: [], masterPlanImgScr: [], routeMapImgScr: [] });
    const propImgInp = useRef(null);
    const floorPlanImgInp = useRef(null);
    const masterPlanImgInp = useRef(null);
    const routeMapImgInp = useRef(null);
    // const [checked, setChecked] = useState(false);
    const { postPropertyFormData } = useSelector(state => state.User);
    const dispatch = useDispatch();

    useEffect(() => {
        setAnimation(true);
    }, [])


    // const handleFileChange = (e) => {
    //     // console.log('e.target.files...',e.target.files)
    //     if (e.target.files.length > 0) {
    //         let newFiles = e.target.files;
    //         if ((files.length + newFiles.length) > 20) {
    //             alert('Can not upload more than 20 images !');
    //             return;
    //         }
    //         setFiles([...files, ...newFiles]);
    //         let arr = [...imgSrcs];
    //         for (let i = 0; i < newFiles.length; i++) {
    //             let reader = new FileReader();

    //             // reader.onprogress = (event) => {
    //             //     const progress = Math.round((event.loaded / event.total) * 100);
    //             //     setProgress(progress);
    //             //   };

    //             reader.onload = () => {
    //                 arr = [...arr, reader.result];
    //                 if (i == newFiles.length - 1) {
    //                     setImgSrcs([...arr]);
    //                 }
    //             }
    //             reader.readAsDataURL(newFiles[i]);
    //         }
    //     }
    // }

    // const handleDeleteFile = (index) => {

    //     if (files.length === 1) {
    //         inputRef.current.value = null
    //     }
    //     setFiles([...files.slice(0, index), ...files.slice(index + 1)]);
    //     setImgSrcs([...imgSrcs.slice(0, index), ...imgSrcs.slice(index + 1)]);
    // }

    const handleFileChange = (e, fileType, imgsrcType, maxLength) => {
        // console.log('e.target.files...',e.target.files)
        if (e.target.files.length > 0) {
            let newFiles = e.target.files;
            if ((allFiles[fileType].length + newFiles.length) > 20) {
                alert(`Can not upload more than ${maxLength} images !`);
                return;
            }
            // setFiles([...allFiles[fileType], ...newFiles]);
            setAllFiles(pre => ({ ...pre, [fileType]: [...allFiles[fileType], ...newFiles] }));
            let arr = [...allImgSrc[imgsrcType]];
            for (let i = 0; i < newFiles.length; i++) {
                let reader = new FileReader();

                // reader.onprogress = (event) => {
                //     const progress = Math.round((event.loaded / event.total) * 100);
                //     setProgress(progress);
                //   };

                reader.onload = () => {
                    arr = [...arr, reader.result];
                    if (i == newFiles.length - 1) {
                        // setImgSrcs([...arr]);
                        setAllImgSrc(pre => ({ ...pre, [imgsrcType]: [...arr] }));
                    }
                }
                reader.readAsDataURL(newFiles[i]);
            }
        }
    }
    const handleDeleteFile = (index, fileType, imgsrcType, inpref) => {

        if (allFiles[fileType].length === 1) {
            inpref.current.value = null
        }
        // setFiles([...files.slice(0, index), ...files.slice(index + 1)]);
        setAllFiles(pre => ({ ...pre, [fileType]: [...allFiles[fileType].slice(0, index), ...allFiles[fileType].slice(index + 1)] }));
        setAllImgSrc(pre => ({ ...pre, [imgsrcType]: [...allImgSrc[imgsrcType].slice(0, index), ...allImgSrc[imgsrcType].slice(index + 1)] }));
        // setImgSrcs([...imgSrcs.slice(0, index), ...imgSrcs.slice(index + 1)]);
    }

    const onClickContinue = () => {
        setCurrCategory('Unit Configuration');
        toast('Gallery Images uploaded successfully !', { type: 'success' });
        dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectGallery: { ...postPropertyFormData.newProjectGallery, completed: true } }));
        window.scrollTo({ top: 0 });
    }

    return (
        <div className={'mt-16 ' + (animation ? 'transition-transform ease-in-out transform -translate-y-10 duration-1000' : '')}>
            {postPropertyFormData.newProjectInfo.completed ? <>
                <div>
                    <p className={styles.title2}>Drag and Drop your "Property Images" here(20 Images)</p>
                    <div className='border-dashed border-red-600 border-[1px] mt-5 flex flex-col justify-center p-1'>
                        <input accept='image/*' multiple ref={propImgInp} type='file' draggable
                            className='w-full min-h-[300px] z-50 absolute opacity-0 py-14 cursor-pointer'
                            onChange={(e) => handleFileChange(e, 'propertyImg', 'propertyImgScr', 20)}
                        />
                        <div className='relative text-gray-400 flex flex-col items-center justify-center p-2 min-h-[300px] text-cente'>
                            {allImgSrc.propertyImgScr.length == 0 && <div className='flex flex-col items-center justify-center'>
                                <i class="fa-solid fa-cloud-arrow-up text-4xl"></i>
                                <p className='text-xl'><span className='font-semibold text-gray-500'>Drop files</span> to upload</p>
                                <p>(or click)</p>
                            </div>}
                            <div className='mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 gap-3 sm:gap-5 p-2'>
                                {allImgSrc.propertyImgScr.map((item, index) => {
                                    return (
                                        <div key={index} className='relative z-50 border-[1px] border-gray-300 p-2'>
                                            <img src={item} alt="Selected File" className='h-24 w-full' />
                                            {/* <p className='text-center text-gray-600 text-sm mt-1'>{(files[index].size/1024).toFixed(2)} KB</p> */}
                                            <i onClick={() => handleDeleteFile(index, 'propertyImg', 'propertyImgScr', propImgInp)}
                                                class="fa-solid fa-circle-xmark absolute -top-2 text-red-500 bg-white rounded-full -right-2 cursor-pointer"></i>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-10'>
                    <p className={styles.title2}>Drag and Drop your "Floor Plan Images" here(10 Images)</p>
                    <div className='border-dashed border-red-600 border-[1px] mt-5 flex flex-col justify-center p-1'>
                        <input accept='image/*' multiple ref={floorPlanImgInp} type='file' draggable
                            className='w-full min-h-[300px] z-50 absolute opacity-0 py-14 cursor-pointer'
                            onChange={(e) => handleFileChange(e, 'floorPlanImg', 'floorPlanImgScr', 10)}
                        />
                        <div className='relative text-gray-400 flex flex-col items-center justify-center p-2 min-h-[300px] text-cente'>
                            {allImgSrc.floorPlanImgScr.length == 0 && <div className='flex flex-col items-center justify-center'>
                                <i class="fa-solid fa-cloud-arrow-up text-4xl"></i>
                                <p className='text-xl'><span className='font-semibold text-gray-500'>Drop files</span> to upload</p>
                                <p>(or click)</p>
                            </div>}
                            <div className='mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 gap-3 sm:gap-5 p-2'>
                                {allImgSrc.floorPlanImgScr.map((item, index) => {
                                    return (
                                        <div key={index} className='relative z-50 border-[1px] border-gray-300 p-2'>
                                            <img src={item} alt="Selected File" className='h-24 w-full' />
                                            {/* <p className='text-center text-gray-600 text-sm mt-1'>{(files[index].size/1024).toFixed(2)} KB</p> */}
                                            <i onClick={() => handleDeleteFile(index, 'floorPlanImg', 'floorPlanImgScr', floorPlanImgInp)}
                                                class="fa-solid fa-circle-xmark absolute -top-2 text-red-500 bg-white rounded-full -right-2 cursor-pointer"></i>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-10'>
                    <p className={styles.title2}>Drag and Drop your "Master Plan Images" here(5 Images)</p>
                    <div className='border-dashed border-red-600 border-[1px] mt-5 flex flex-col justify-center p-1'>
                        <input accept='image/*' multiple ref={masterPlanImgInp} type='file' draggable
                            className='w-full min-h-[300px] z-50 absolute opacity-0 py-14 cursor-pointer'
                            onChange={(e) => handleFileChange(e, 'masterPlanImg', 'masterPlanImgScr', 5)}
                        />
                        <div className='relative text-gray-400 flex flex-col items-center justify-center p-2 min-h-[300px] text-cente'>
                            {allImgSrc.masterPlanImgScr.length == 0 && <div className='flex flex-col items-center justify-center'>
                                <i class="fa-solid fa-cloud-arrow-up text-4xl"></i>
                                <p className='text-xl'><span className='font-semibold text-gray-500'>Drop files</span> to upload</p>
                                <p>(or click)</p>
                            </div>}
                            <div className='mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 gap-3 sm:gap-5 p-2'>
                                {allImgSrc.masterPlanImgScr.map((item, index) => {
                                    return (
                                        <div key={index} className='relative z-50 border-[1px] border-gray-300 p-2'>
                                            <img src={item} alt="Selected File" className='h-24 w-full' />
                                            {/* <p className='text-center text-gray-600 text-sm mt-1'>{(files[index].size/1024).toFixed(2)} KB</p> */}
                                            <i onClick={() => handleDeleteFile(index, 'masterPlanImg', 'masterPlanImgScr', masterPlanImgInp)}
                                                class="fa-solid fa-circle-xmark absolute -top-2 text-red-500 bg-white rounded-full -right-2 cursor-pointer"></i>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-10'>
                    <p className={styles.title2}>Drag and Drop your "Route Map Images" here(2 Images)</p>
                    <div className='border-dashed border-red-600 border-[1px] mt-5 flex flex-col justify-center p-1'>
                        <input accept='image/*' multiple ref={routeMapImgInp} type='file' draggable
                            className='w-full min-h-[300px] z-50 absolute opacity-0 py-14 cursor-pointer'
                            onChange={(e) => handleFileChange(e, 'routeMapImg', 'routeMapImgScr', 5)}
                        />
                        <div className='relative text-gray-400 flex flex-col items-center justify-center p-2 min-h-[300px] text-cente'>
                            {allImgSrc.routeMapImgScr.length == 0 && <div className='flex flex-col items-center justify-center'>
                                <i class="fa-solid fa-cloud-arrow-up text-4xl"></i>
                                <p className='text-xl'><span className='font-semibold text-gray-500'>Drop files</span> to upload</p>
                                <p>(or click)</p>
                            </div>}
                            <div className='mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 gap-3 sm:gap-5 p-2'>
                                {allImgSrc.routeMapImgScr.map((item, index) => {
                                    return (
                                        <div key={index} className='relative z-50 border-[1px] border-gray-300 p-2'>
                                            <img src={item} alt="Selected File" className='h-24 w-full' />
                                            {/* <p className='text-center text-gray-600 text-sm mt-1'>{(files[index].size/1024).toFixed(2)} KB</p> */}
                                            <i onClick={() => handleDeleteFile(index, 'routeMapImg', 'routeMapImgScr', routeMapImgInp)}
                                                class="fa-solid fa-circle-xmark absolute -top-2 text-red-500 bg-white rounded-full -right-2 cursor-pointer"></i>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-7 flex gap-5'>
                    <button className={styles.formBtn}
                    onClick={() => {
                        setCurrCategory('New Project Info');
                        window.scrollTo({ top: 0 });
                    }} 
                    >Back</button>
                    <button type='submit' className={styles.formBtn} onClick={onClickContinue}>Continue</button>
                </div>
            </>
                :
                <div className={(animation ? 'transition-opacity opacity-100 duration-500' : 'opacity-0') + ' bg-red-600 rounded text-white p-2 font-semibold'}>
                    Please submit new project info first
                </div>
            }
        </div>
    );
}

export default NewProjectGallery;
