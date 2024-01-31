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
import { NavLink } from 'react-router-dom';

const MobileMenu = () => {

    const [showMoreServiceMenu, setShowMoreServiceMenu] = useState(false);
    const [showPostPropertyMenu, setShowPostProperty] = useState(false);

    return (
        <div class="flex flex-col">
            <span class={styles.dropdownItem}>
                <img alt='' src={buyIcon} className='h-5 w-6 mr-5' />Buy
            </span>
            <span class={styles.dropdownItem}>
                <span>
                    <img alt='' src={rentIcon} className='h-5 w-6 mr-5' />
                </span>
                <p className={styles.textMedium}>Rent</p>
            </span>
            <span class={styles.dropdownItem}>
                <span>
                    <img alt='' src={projectIcon} className='h-5 w-6 mr-5' />
                </span>
                <p className={styles.textMedium}>New Project</p>
            </span>
            <NavLink to="/agents" >
                <div class={styles.dropdownItem}>
                    <span>
                        <img alt='' src={agentIcon} className='h-5 w-6 mr-5' />
                    </span>
                    <p className={styles.textMedium}>Agent</p>
                </div>

            </NavLink>
            <NavLink to="/builders">
                <div class={styles.dropdownItem}>
                    <span>
                        <img alt='' src={agentIcon} className='h-5 w-6 mr-5' />
                    </span>
                    <p className={styles.textMedium}>Builders</p>
                </div>
            </NavLink >
            <div className='relative group'>
                <div
                    onClick={() => setShowMoreServiceMenu(!showMoreServiceMenu)}
                    class={styles.dropdownItem}>
                    <span>
                        <img alt='' src={moreServicesIcon} className='h-5 w-6 mr-5' />
                    </span>
                    <p className={styles.textMedium}>More Services</p>
                    <DropdownIcon />
                </div>
                {showMoreServiceMenu && <div className={'z-50 bg-white p-2 pt-2 text-gray-800 top-8 border-gray-300 border-[1px] group-hover:block w-[100%]'}>
                    <span class={styles.dropdownItem}>
                        <img alt='' src={interiorDesiginStudio} className='h-5 w-6 mr-5 ' />
                        <span className=''>
                            Interior Design Studio
                        </span>
                    </span>
                    <span class='text-black p-2 hover:bg-gray-100 border-gray-100 flex'>
                        <span>
                            <img alt='' src={homeLoan} className='h-5 w-6 mr-5' />
                        </span>
                        Home Loan
                    </span>
                </div>}
            </div>

            <NavLink to={'/buyer-registration'}>
                <div class={styles.dropdownItem + 'md:hidden'}>
                    <span>
                        <img alt='' src={buyerIcon} className='h-5 w-6 mr-5' />
                    </span>
                    <p className={styles.textMedium}> Buyer/Tenant Registration</p>
                </div>
            </NavLink>

            <div className='relative group md:hidden'>
                <div
                    onClick={() => setShowPostProperty(!showPostPropertyMenu)}
                    class={styles.dropdownItem}>
                    <span>
                        <img alt='' src={moreServicesIcon} className='h-5 w-6 mr-5' />
                    </span>
                    <p className={styles.textMedium}>Post Property</p>
                    <DropdownIcon />
                </div>
                {showPostPropertyMenu && <div className={'z-50 bg-white p-2 pt-2 text-gray-800 top-8 border-gray-300 border-[1px] group-hover:block w-[100%]'}>
                    <NavLink to={'/post-property'}>
                        <span class={styles.dropdownItem}>
                            <img alt='' src={postPropertyPerDay} className='h-5 w-6 mr-5 ' />
                            <span className=''>
                                Post-Property-Rs 10/day
                            </span>
                        </span>
                    </NavLink>

                    <NavLink to={'/post-property'}>
                        <span class={styles.dropdownItem}>
                            <img alt='' src={postPropertyPerDay} className='h-5 w-6 mr-5 ' />
                            <span className=''>
                                Featured-Property-Rs 100/day
                            </span>
                        </span>
                    </NavLink>
                    <NavLink to={'/post-property/new-project'}>
                        <span class='text-black p-2 text-sm hover:bg-gray-100 border-gray-100 flex'>
                            <span>
                                <img alt='' src={postPropertyPerDay} className='h-5 w-6 mr-5' />
                            </span>
                            New Property-Rs 100/day
                        </span>
                    </NavLink>

                </div>}
            </div>

        </div>
    );
}

export default MobileMenu;
