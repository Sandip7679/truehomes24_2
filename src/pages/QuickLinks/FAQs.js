import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import BgImage from '../../assets/images/buildersBg.jpg'
import { NavLink } from 'react-router-dom';
import FormCatagories from '../../components/PostProperty/PostPropertyComp';
import { styles } from '../../Styles/Styles';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import Footer from '../../components/Footer';

const catagories = ['Home Loan', 'Properties', 'Projects'];

const Faqs = [
    {
        title: 'Home Loan',
        questions: [
            {
                question: 'WHAT ARE PROCESSING FEES?',
                open: false,
                ans: 'The most important and clear fee charged on home loans is the processing fee. It is a fee you have to pay banks or NBFCs to deal with your home loan application. It is a one-time fee that is usually paid upfront – that is, you have to pay it out of your own pocket to the bank/NBFC instead of it being deducted from your loan amount. Some banks may call it administrative fee. Usually the processing fee will be charged only after your application is approved.'
            },
            {
                question: 'WHAT ARE PROCESSING FEES?',
                open: false,
                ans: 'The most important and clear fee charged on home loans is the processing fee. It is a fee you have to pay banks or NBFCs to deal with your home loan application. It is a one-time fee that is usually paid upfront – that is, you have to pay it out of your own pocket to the bank/NBFC instead of it being deducted from your loan amount. Some banks may call it administrative fee. Usually the processing fee will be charged only after your application is approved.'
            },
        ]
    },
    {
        title: 'Porperties',
        questions: [
            {
                question: 'WHAT IS?',
                open: false,
                ans: 'The term property describes anything that someone – a person or a business has a legal title over. By having a legal title, the owners have some enforceable rights over it. It can be of two broad types – tangible and intangible.'
            },
        ]
    },
    {
        title: 'Projects',
        questions: [
            {
                question: 'PRE LAUNCH VILLA PROJECTS IN BANGALORE 2022',
                open: false,
                ans: 'The following are the new projects going to be launched.'
            },
        ]
    },
]

const FAQs = () => {
    const [currCatagory, setCurrCategory] = useState('Home Loan');
    const [currQuesInds, setCurrQusInds] = useState([null, null]);
    return (
        <div className='container mx-auto'>
            <Header />
            <div>
                <div className=' fixed left-0 top-0 h-screen w-screen'>
                    <img alt='' src={BgImage} className='h-full' />
                </div>
                <div className='fixed left-0 h-full mb-2 w-full bg-black bg-opacity-50 overflow-y-scroll'>
                    <div>
                        <div className='mt-[150px] h-[100px] z-[200] text-center text-white tracking-widest'>
                            <p className={'text-center text-2xl sm:text-3xl text-white font-semibold tracking-wider md:text-3xl'}>FAQ</p>
                            <div className='mt-5 text-xs lg:text-sm'>
                                <NavLink to={'/'}>HOME</NavLink> / <span>FAQ</span>
                            </div>
                        </div>
                        <div className='mt-10 pt-10 min-h-[500px] bg-white'>
                            <div className='px-2 sm:px-[10%]'>
                                <FormCatagories catagories={catagories} activeCatagory={currCatagory} onClickItem={(item) => setCurrCategory(item)} />
                                <div className='mt-5'>
                                    {Faqs.map((item, index) => {
                                        return (
                                            <div id={`${index}`} className='mt-10 scroll-mt-20'>
                                                <p className={styles.title3}>{item.title}</p>
                                                <div className='mt-5'>
                                                    {item.questions.map((itm, ind) => {
                                                        return (
                                                            <div>
                                                                <div
                                                                    onClick={() => currQuesInds[0] == index && currQuesInds[1] == ind ? setCurrQusInds([null, null]) : setCurrQusInds([index, ind])}
                                                                    className={
                                                                        (currQuesInds[0] == index && currQuesInds[1] == ind ? 'bg-violet-400 text-white' : 'bg-gray-100')
                                                                        + ' flex justify-between gap-1 mt-2 w-full p-2 pt-2 pb-3 border-[1px] border-gray-300 rounded tracking-wider text-xs font-semibold cursor-pointer'}>
                                                                    <div className={'mt-2'}>{itm.question}</div>
                                                                    <div className='text-xl font-semibold'>{currQuesInds[0] == index && currQuesInds[1] == ind ? '-' : '+'}</div>
                                                                </div>
                                                                <div className={(currQuesInds[0] == index && currQuesInds[1] == ind ? 'block duration-700' : 'hidden') + ' border-[1px] p-2 bg-gray-50 rounded-b-md text-sm'}>
                                                                    {itm.ans}
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
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
        </div>
    );
}

export default FAQs;
