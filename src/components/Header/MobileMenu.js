import React, { useState } from 'react';

import buyIcon from '../../assets/Icons/buy.png';
import rentIcon from '../../assets/Icons/rent.png';
import projectIcon from '../../assets/Icons/project.png';
import agentIcon from '../../assets/Icons/agent.png';
import moreServicesIcon from '../../assets/Icons/more-services.png';
import buyerIcon from '../../assets/Icons/buyer.png';
import postPropertyPerDay from '../../assets/Icons/post-property-per-day.png';
import interiorDesiginStudio from '../../assets/Icons/interiorDesiginStudio.png';
import homeLoan from '../../assets/Icons/homeLoan.png';

import DropdownIcon from '../svgIcons';
import { styles } from '../../Styles/Styles';

const MobileMenu = () => {

    const [showMoreServiceMenu, setShowMoreServiceMenu] = useState(false);
    const [showPostPropertyMenu, setShowPostProperty] = useState(false);

    return (
        <div class="flex flex-col">
            <a href="#" class={styles.dropdownItem}>
                <img src={buyIcon} className='h-5 w-6 mr-5' />Buy
            </a>
            <a href="#" class={styles.dropdownItem}>
                <span>
                    <img src={rentIcon} className='h-5 w-6 mr-5' />
                </span>
                <p className={styles.textMedium}>Rent</p>
            </a>
            <a href="#" class={styles.dropdownItem}>
                <span>
                    <img src={projectIcon} className='h-5 w-6 mr-5' />
                </span>
                <p className={styles.textMedium}>New Project</p>
            </a>
            <a href="#" class={styles.dropdownItem}>
                <span>
                    <img src={agentIcon} className='h-5 w-6 mr-5' />
                </span>
                <p className={styles.textMedium}>Agent</p>
            </a>
            <a href="#" class={styles.dropdownItem}>
                <span>
                    <img src={agentIcon} className='h-5 w-6 mr-5' />
                </span>
                <p className={styles.textMedium}>Builders</p>
            </a>
            <div className='relative group'>
                <div
                    onClick={() => setShowMoreServiceMenu(!showMoreServiceMenu)}
                    class={styles.dropdownItem}>
                    <span>
                        <img src={moreServicesIcon} className='h-5 w-6 mr-5' />
                    </span>
                    <p className={styles.textMedium}>More Services</p>
                    <DropdownIcon />
                </div>
                {showMoreServiceMenu && <div className={'z-50 bg-white p-2 pt-2 text-gray-800 top-8 border-gray-300 border-[1px] group-hover:block w-[100%]'}>
                    <a href="#" class={styles.dropdownItem}>
                        <img src={interiorDesiginStudio} className='h-5 w-6 mr-5 ' />
                        <span className=''>
                            Interior Design Studio
                        </span>
                    </a>
                    <a href="#" class='text-black p-2 hover:bg-gray-100 border-gray-100 flex'>
                        <span>
                            <img src={homeLoan} className='h-5 w-6 mr-5' />
                        </span>
                        Home Loan
                    </a>
                </div>}
            </div>

            <a href="#" class={styles.dropdownItem}>
                <span>
                    <img src={buyerIcon} className='h-5 w-6 mr-5' />
                </span>
                <p className={styles.textMedium}> Buyer/Tenant Registration</p>
            </a>
            <div className='relative group'>
                <div
                    onClick={() => setShowPostProperty(!showPostPropertyMenu)}
                    class={styles.dropdownItem}>
                    <span>
                        <img src={moreServicesIcon} className='h-5 w-6 mr-5' />
                    </span>
                    <p className={styles.textMedium}>Post Property</p>
                    <DropdownIcon />
                </div>
                {showPostPropertyMenu && <div className={'z-50 bg-white p-2 pt-2 text-gray-800 top-8 border-gray-300 border-[1px] group-hover:block w-[100%]'}>
                    <a href="#" class={styles.dropdownItem}>
                        <img src={postPropertyPerDay} className='h-5 w-6 mr-5 ' />
                        <span className=''>
                            Post-Property-Rs 10/day
                        </span>
                    </a>
                    <a href="#" class={styles.dropdownItem}>
                        <img src={postPropertyPerDay} className='h-5 w-6 mr-5 ' />
                        <span className=''>
                            Featured-Property-Rs 100/day
                        </span>
                    </a>
                    <a href="#" class='text-black p-2 text-sm hover:bg-gray-100 border-gray-100 flex'>
                        <span>
                            <img src={postPropertyPerDay} className='h-5 w-6 mr-5' />
                        </span>
                        New Property-Rs 100/day
                    </a>
                </div>}
            </div>

        </div>
    );
}

export default MobileMenu;
