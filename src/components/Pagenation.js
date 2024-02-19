import React, { useEffect, useState } from 'react';
import { styles } from '../Styles/Styles';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrPage } from '../Redux/reducer/User';

const Pagenation = ({ lastPage }) => {
    const [startPage, setStartPage] = useState(1);
    const { currPage } = useSelector(state => state.User);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('lastpage...', lastPage)
    }, [lastPage]);

    return (
        <div className='mt-10 relative flex flex-wrap gap-2 justify-center'>
            <div className='flex gap-2'>
                {startPage > 1 && <button
                    onClick={() => {
                        setStartPage(1);
                        dispatch(setCurrPage(1));
                    }}
                    className={styles.paginationBtn + ''}>
                    <i class="fa-solid fa-chevron-left text-xs"></i> First
                </button>}
                {currPage > 1 && <button onClick={() => {
                    if (currPage > 1) {
                        dispatch(setCurrPage(currPage - 1));
                    }
                    if (startPage > 1) {
                        setStartPage(startPage - 1);
                    }
                }}
                    className={styles.paginationBtn}>
                    Previous
                </button>}
            </div>
            <div className='flex gap-2'>
                {[1, 2, 3, 4, 5].map((item, index) => {
                    return (
                        <>
                            {startPage + index <= lastPage && <button
                                onClick={() => dispatch(setCurrPage(startPage + index))}
                                className={styles.paginationBtn + 'px-5 ' + (startPage + index == currPage && 'bg-gray-700 text-white')}>
                                {startPage + index}
                            </button>}
                        </>

                    )
                })}
            </div>
            {<div className='flex gap-2'>
                {currPage < lastPage && <button onClick={() => {
                    if (currPage < lastPage) {
                        if (currPage == startPage + 4) {
                            setStartPage(startPage + 1);
                        }
                        dispatch(setCurrPage(currPage + 1));
                    }
                }}
                    className={styles.paginationBtn}>
                    Next
                </button>}
                {startPage < lastPage - 4 && <button onClick={() => {
                    if (lastPage > 4) {
                        setStartPage(lastPage - 4);
                    }
                    dispatch(setCurrPage(lastPage));
                }}
                    className={styles.paginationBtn}>
                    Last <i class="fa-solid fa-chevron-right text-xs"></i>
                </button>}
            </div>}
        </div>
    );
}

export default Pagenation;
