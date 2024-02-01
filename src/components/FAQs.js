import React, { useState } from 'react';
import { styles } from '../Styles/Styles';

const faqs = [
    {
        question: 'What are the top localities to buy a property in Dubai ?',
        answer: 'Dubai has many localities to choose from Dubai Culture Village, MBR City are among the top Localites you can look to buy property.'
    },
    {
        question: 'Are there Properties in Dubai available form owners?',
        answer: 'Explore 0+ owner properties in Dubai on Truehomes24. Find details with easy-to-use filters like Photos, Verified listings, Under construction, Ready to move listings, and many others.'
    },
    {
        question: 'Are there any ready-to-move properties in Dubai?',
        answer: 'Yes, there are 6+ ready to move properties in Dubai. Explore all on Truehomes24.com. Sort your search results using important parameters like price and date of posting.'
    },
    {
        question: 'Are there apartments available for sale in societies in Dubai?',
        answer: 'There are many available apartments in different societies. Get a complete list of society apartments for sale in Dubai only on Truehomes24.'
    },
    {
        question: 'Are there any Apartments below 30 Lakhs in Dubai?',
        answer: 'Yes, there are 6+ popular apartments in dubai below 30 lakhs.. Here is a complete list of new residential launches in Dubai.'
    }
]

const FAQs = () => {
    const [faqData, setFaqData] = useState(faqs);
    const [currInd, setCurrInd] = useState(null);
    return (
        <div className='mb-10'>
            <p className={styles.title3}>Frequently Asked Questions(FAQ)</p>
            <div className=''>
                {faqData.map((item, index) => {
                    return (
                        <div key={index} className='w-full shadow-lg'>
                            <button
                                onClick={() =>currInd === index?setCurrInd(null): setCurrInd(index)}
                                className='flex justify-between w-full px-[1%] py-2 md:py-4 mt-4 border-[1px] border-gray-200 hover:bg-orange-600 tracking-wide hover:text-white '>
                                <p className={styles.textMedium + 'text-left ml-1'}>{item.question}</p>
                                <p className='text-lg'>+</p>
                            </button>
                            {currInd === index && <div className={styles.textMedium + 'bg-white  border-t-[1px] border-t-gray-500 py-2 md:py-4 px-[1%]'}>
                                {item.answer}
                            </div>}
                        </div>
                    )

                })}
            </div>
        </div>
    );
}

export default FAQs;
