import React, { Fragment } from 'react'
import AboutUs from './AboutUs'
import NavBar from '../components/Navbar/Navbar';
import about from '../utils/img/About.jpeg'


const AboutPage = () => {
    return ( 
        <Fragment>
            <NavBar />
            <AboutUs title={'About us '} pics={about} />
        </Fragment>
     );
}
 
export default AboutPage;