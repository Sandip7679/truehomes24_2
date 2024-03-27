import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import FormCatagories from '../../components/PostProperty/PostPropertyComp';
import { styles } from '../../Styles/Styles';

// import JoditEditor from 'jodit-react';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import Footer from '../../components/Footer';
import NewProjectInfo from './NewProjectInfo';
import NewProjectGallery from '../../components/PostProperty/NewProjectGallery';
import UnitConfiguration from '../../components/PostProperty/UnitConfiguration';


const formCatagories = ['New Project Info', 'Gallery', 'Unit Configuration'];



const NewProject = () => {
    const [currCatagory, setCurrCategory] = useState('New Project Info');
    // const editor = useRef(null);
    // const [content, setContent] = useState('');

    // const config = useMemo(
    // 	{
    // 		readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    // 		placeholder: placeholder || 'Start typings...'
    // 	},
    // 	[placeholder]
    // );

    const changeCategories = (catetory) => {
        setCurrCategory(catetory);
    }
    return (
        <div>
            <Header />
            <div className='mt-[80px]'>
                <div className={styles.postpropTitle}>New Projects</div>
                <div className='mt-5 px-2 container mx-auto mb-20'>
                    <FormCatagories catagories={formCatagories} activeCatagory={currCatagory} onClickItem={(item) => setCurrCategory(item)} />
                    <div className={styles.formCard}>
                        {currCatagory === 'New Project Info' && <NewProjectInfo setCurrCategory={changeCategories} />}
                        {currCatagory === 'Gallery' && <NewProjectGallery setCurrCategory={changeCategories} />}
                        {currCatagory === 'Unit Configuration' && <UnitConfiguration setCurrCategory={changeCategories} />}
                    </div>
                </div>
            </div>
            <TopCItiesFilter />
            <Footer />
        </div>
    );
}

export default NewProject;
