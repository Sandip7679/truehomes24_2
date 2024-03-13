import React, { useEffect, useState } from 'react';
import { styles } from '../Styles/Styles';

const Pagenation = ({ lastPage,changeCurrPage }) => {
    const [startPage, setStartPage] = useState(1);
    const [currPage,setCurrPage] = useState(1);

    useEffect(() => {
        console.log('lastpage...', lastPage)
    }, [lastPage]);

    return (
        <div className='mt-10 relative flex flex-wrap gap-2 justify-center'>
            <div className='flex gap-2'>
                {startPage > 1 && <button
                    onClick={() => {
                        setStartPage(1);
                        // dispatch(setCurrPage(1));
                        setCurrPage(1);
                        changeCurrPage(1);
                    }}
                    className={styles.paginationBtn + ''}>
                    <i class="fa-solid fa-chevron-left text-xs"></i> First
                </button>}
                {currPage > 1 && <button onClick={() => {
                    if (currPage > 1) {
                        setCurrPage(currPage - 1)
                        changeCurrPage(currPage-1);
                    }
                    if (startPage > 1) {
                        setStartPage(startPage - 1);
                    }
                }}
                    className={styles.paginationBtn}>
                    Previous
                </button>}
            </div>
            <div className='flex flex-wrap gap-2'>
                {[1, 2, 3, 4, 5].map((item, index) => {
                    return (
                        <>
                            {startPage + index <= lastPage && <button
                                onClick={() => {
                                    setCurrPage(startPage + index)
                                    changeCurrPage(startPage+index);
                                }}
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
                        setCurrPage(currPage + 1)
                        changeCurrPage(currPage+1);
                    }
                }}
                    className={styles.paginationBtn}>
                    Next
                </button>}
                {startPage < lastPage - 4 && <button onClick={() => {
                    if (lastPage > 4) {
                        setStartPage(lastPage - 4);
                    }
                    setCurrPage(lastPage);
                    changeCurrPage(lastPage);
                    // window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                    className={styles.paginationBtn}>
                    Last <i class="fa-solid fa-chevron-right text-xs"></i>
                </button>}
            </div>}
        </div>
    );
}

export default Pagenation;
