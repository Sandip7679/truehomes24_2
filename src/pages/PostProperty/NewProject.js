import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import FormCatagories, { AreaInputs, ButtonList, DropdownInput, InputList, JoditTextEditor } from '../../components/PostProperty/PostPropertyComp';
import { styles } from '../../Styles/Styles';
import Select from 'react-select';

// import JoditEditor from 'jodit-react';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import Footer from '../../components/Footer';


const formCatagories = ['New Project Info', 'Gallery', 'Unit Configuration'];
const countries = ['India', 'Singapore', 'UAE', 'United States'];
const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
    'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry'
];

const Cities = ['Kolkata', 'Pune', 'Delhi'];
const propTypesDropdownData = ['Apartment', 'Independent House/Villa', 'Shop/Showroom'];
const projectStatus = ['Ongoing', 'Upcoming', 'Completed', 'Sold Out'];
const inputs = [
    { name: 'Country', placeholder: 'Select Country', state: 'country', star: true, dropdownData: countries },
    { name: 'State', placeholder: 'Select State', state: 'state', star: true, dropdownData: indianStates },
    { name: 'City', placeholder: 'Select City', state: 'city', star: true, dropdownData: Cities },
    { name: 'Locality', placeholder: 'Select Locality', state: 'locality', star: true, dropdownData: null },
    { name: 'Sub Locality', placeholder: 'Select Sub Locality', state: 'subLocality', star: false, dropdownData: null },
    { name: 'Society Name', placeholder: 'Select Society Name', state: 'Society Name', star: true, dropdownData: null },
    { name: 'Property Type', placeholder: 'Select Property Type', state: 'Property Type', star: false, dropdownData: propTypesDropdownData },
    { name: 'Bedroom from (Ex. 1BHK)', placeholder: 'Enter Bedroom from', state: 'Bedroom from', star: false, dropdownData: null },
    { name: 'Bedroom to (Ex. 1BHK)', placeholder: 'Enter Bedroom to', state: 'Bedroom to', star: false, dropdownData: null },
    { name: 'No. of Bathrooms from', placeholder: 'Enter starting Bathroom number', state: 'No. of Bathrooms from', star: false, dropdownData: null },
    { name: 'No. of Bathrooms to', placeholder: 'Enter highest Bathroom number', state: 'No. of Bathrooms to', star: false, dropdownData: null },
    { name: 'Total Floor', placeholder: 'Enter total floor', state: 'totalFloor', star: false, dropdownData: null },
]

const inputs2 = [
    { name: 'Price from (in Rs)', placeholder: 'Enter ypur price from', state: 'priceFrom', star: true, dropdownData: null },
    { name: 'Price to (in Rs)', placeholder: 'Enter ypur price to', state: 'priceto', star: true, dropdownData: null },
    { name: 'Builder name', placeholder: 'Enter ypur builder name', state: 'buildername', star: true, dropdownData: null },
    { name: 'Project status', placeholder: 'Select One', state: 'projectStatus', star: true, dropdownData: projectStatus },
];

const amenities = ['24by7 Water', 'CCTV Camera', 'Gated Society', 'Gym', 'Internet Connectivity',
    'Jogging Track', 'Kids Play Area', 'Kids Play Pool', 'Large Open Space', 'Laundry Services', 'Lift', 'Maintenance Staff',
    'Multipurpose Hall', 'Power Backup', 'RainWater Harvesting', 'Security', 'Swimming Pool', 'Visitor Parking', 'Waste Disposal'
]

const areasInputs = [
    { name: 'Area from', star: true },
    { name: 'Area to', star: true }
];

const furnishingItem = [
    { value: 'Ari Conditioner', label: 'Ari Conditioner' },
    { value: 'Bed', label: 'Bed' },
    { value: 'Book Case', label: 'Book Case' },
    { value: 'Chairs', label: 'Chairs' },
    { value: 'Chimney', label: 'Chimney' },
    { value: 'Curtain', label: 'Curtain' },
    { value: 'Desk', label: 'Desk' },
    { value: 'Dining Table', label: 'Dining Table' },
    { value: 'Dinerware', label: 'Dinerware' },
    { value: 'Bath rugs', label: 'Bath rugs' },
    { value: 'DVD Player', label: 'DVD Player' },
    { value: 'Exhaust Fan', label: 'Exhaust Fan' },
    { value: 'Fan', label: 'Fan' },
    { value: 'Food storage containers', label: 'Food storage containers' },
    { value: 'Iron Board', label: 'Iron Board' },
    { value: 'Gas Stove', label: 'Gas Stove' },
    { value: 'Hair Dryer', label: 'Hair Dryer' },
    { value: 'Smart TV', label: 'Hair Dryer' },
    { value: 'Sofa', label: 'Sofa' },
    { value: 'Table Lamps', label: 'Table Lamps' },
    { value: 'Washing machine', label: 'Washing machine' }
];

const NewProject = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [formCatagory, setFormCategory] = useState('New Project Info');
    // const editor = useRef(null);
    // const [content, setContent] = useState('');

    // const config = useMemo(
    // 	{
    // 		readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    // 		placeholder: placeholder || 'Start typings...'
    // 	},
    // 	[placeholder]
    // );

    return (
        <div>
            <Header />
            <div className='mt-[80px]'>
                <div className={styles.postpropTitle}>New Projects</div>
                <div className='mt-5 px-[5%] sm:px-[8%] mb-10'>
                    <FormCatagories catagories={formCatagories} activeCatagory={formCatagory} onClickItem={(item)=>setFormCategory(item)}/>
                    <div className={styles.formCard}>
                        <InputList inputs={inputs} />
                        <ButtonList title={'Amenities'} btnNames={amenities} initialName={''} classname={'mt-5'} required={true} />
                        <ButtonList title={'Furnishing Type '} btnNames={['Furnished', 'Semi Furnished', 'Unfurnished',]} initialName={''} classname={'mt-5'} />
                        <div className='mt-5'>
                            <span className=''>Furnishing Item </span>
                            <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={furnishingItem}
                                isMulti
                                className='mt-2'
                            />
                        </div>
                        <AreaInputs inputDatas={areasInputs} />
                        <InputList inputs={inputs2} classname={'mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3'} />
                        <JoditTextEditor title = {'Description'}/>
                        <JoditTextEditor title = {'About Builder'}/>
                        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                            <DropdownInput title={'Project Link'} placeholder={'Example:https//www.truehomes24.com'} required={true}/>
                            <DropdownInput title={'Image'} placeholder={'Example:https//www.truehomes24.com'} required={true} type={'file'}/>
                            <DropdownInput title={'Video'} placeholder={'Example:https//www.truehomes24.com'} required={true} type={'file'} />
                        </div>
                        <div>
                            {/* <div dangerouslySetInnerHTML={{ __html: value }} /> */}
                        </div>
                        <div className='mt-5'>
                            <button type='submit' className={styles.formBtn}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
            <TopCItiesFilter/>
            <Footer/>
        </div>
    );
}

export default NewProject;
