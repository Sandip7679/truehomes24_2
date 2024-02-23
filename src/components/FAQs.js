import React, { useEffect, useState } from 'react';
import { styles } from '../Styles/Styles';
import useApi from '../ApiConf';
import { useSelector } from 'react-redux';

// const faqs = [
//     {
//         question: 'What are the top localities to buy a property in Dubai ?',
//         answer: 'Dubai has many localities to choose from Dubai Culture Village, MBR City are among the top Localites you can look to buy property.'
//     },
//     {
//         question: 'Are there Properties in Dubai available form owners?',
//         answer: 'Explore 0+ owner properties in Dubai on Truehomes24. Find details with easy-to-use filters like Photos, Verified listings, Under construction, Ready to move listings, and many others.'
//     },
//     {
//         question: 'Are there any ready-to-move properties in Dubai?',
//         answer: 'Yes, there are 6+ ready to move properties in Dubai. Explore all on Truehomes24.com. Sort your search results using important parameters like price and date of posting.'
//     },
//     {
//         question: 'Are there apartments available for sale in societies in Dubai?',
//         answer: 'There are many available apartments in different societies. Get a complete list of society apartments for sale in Dubai only on Truehomes24.'
//     },
//     {
//         question: 'Are there any Apartments below 30 Lakhs in Dubai?',
//         answer: 'Yes, there are 6+ popular apartments in dubai below 30 lakhs.. Here is a complete list of new residential launches in Dubai.'
//     }
// ]

const FAQs = ({Data}) => {
    const [faqData, setFaqData] = useState([]);
    const [currInd, setCurrInd] = useState(null);
    const { fetchData, error } = useApi();
    const { currLocation, propertyListState } = useSelector(state => state.User);

    useEffect(() => {
        if(Data){
            setFaqData(Data);
        }else{
            getFaqData();
        }
    }, [currLocation,propertyListState]);

    const getFaqData = async () => {
        let res;
        try {
            res = await fetchData(`faq-content?city=${currLocation.code}
            &property_status=${propertyListState?.propertyStatus?.value == 'new projects' ? 'new project' : propertyListState?.propertyStatus?.value}`,
                'GET');
        } catch (err) {
            console.log(err);
        }
        if (res?.data) {
            setFaqData(res?.data);
        }
    }
    return (
        <div className='mb-10'>
            <p className={styles.title3}>Frequently Asked Questions(FAQ)</p>
            <div className='mt-5'>
                { faqData.map((item, index) => {
                    return (
                        <div key={index} className='w-full -mt-3'>
                            <button
                                onClick={() => currInd === index ? setCurrInd(null) : setCurrInd(index)}
                                className='z-50 shadow-lg flex justify-between w-full px-[1%] py-2 md:py-4 mt-1 border-[1px] border-gray-200 hover:bg-orange-600 tracking-wide hover:text-white '>
                                <p className={styles.textMedium + 'text-left ml-1'}>{item.question}</p>
                                <p className='text-lg'>{currInd === index ?'-':'+'}</p>
                            </button>
                            {/* {currInd == index && <div className={styles.textMedium + (currInd === index ? 'duration-500 ' : '') + ' border-t-[1px] shadow-lg border-t-gray-500 py-2 md:py-4 px-[1%]'}>
                                <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                            </div>} */}
                            <div className={styles.textMedium + (currInd === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0') + ' grid overflow-hidden transition-all duration-500 ease-in-out border-[1px] px-2 bg-gray-50 rounded-b-md text-sm'}>
                                <div className='overflow-hidden py-2' dangerouslySetInnerHTML={{ __html: item.answer }} />
                            </div>
                        </div>
                    )

                })}
            </div>
        </div>
    );
}

export default FAQs;
