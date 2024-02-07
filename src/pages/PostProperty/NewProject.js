import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import FormCatagories from '../../components/PostProperty/PostPropertyComp';
import { styles } from '../../Styles/Styles';

// import JoditEditor from 'jodit-react';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import Footer from '../../components/Footer';
import NewProjectInfo from './NewProjectInfo';


const formCatagories = ['New Project Info', 'Gallery', 'Unit Configuration'];



const NewProject = () => {
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
                <div className='mt-5 px-2 container mx-auto mb-10'>
                    <FormCatagories catagories={formCatagories} activeCatagory={formCatagory} onClickItem={(item)=>setFormCategory(item)}/>
                    <div className={styles.formCard}>
                        <NewProjectInfo/>
                    </div>
                </div>
            </div>
            <TopCItiesFilter/>
            <Footer/>
        </div>
    );
}

export default NewProject;
