import React, { useEffect, useState } from 'react';

const ScrollUp = ({targetElement}) => {

    const [displayState,setDisplayState] = useState('block');

    useEffect(()=>{
        ovserveIntersection();
    },[]);
    const scrollToTop = ()=>{
        window.scrollTo({top:0,behavior:'smooth'})
    }

    const ovserveIntersection = () => {
        let observer = new IntersectionObserver((entries) => {
            if (!entries[0].isIntersecting) {
                setDisplayState('hidden');
            }
            else {
                setDisplayState('block');
            }
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0
        });
        observer.observe(targetElement.current);
    }
    return (
        <button
            onClick={() => scrollToTop()}
            className={displayState +' fixed bottom-14 right-1 sm:right-[5%] opacity-40 border-2 border-gray-400 flex justify-center items-center h-8 w-8 sm:h-10 sm:w-10 rounded-full'}>
            <i class="fa-solid fa-arrow-up text-gray-400"></i>
        </button>
    );
}

export default ScrollUp;
