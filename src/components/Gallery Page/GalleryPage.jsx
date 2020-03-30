import React from 'react';
import NavBar from '../Navbar/Navbar';
import Gallery from './Gallery';
import gallery from '../../utils/img/gallery.jpeg';
import gallery3 from '../../utils/img/gallery3.jpeg'

const GalleryPage = () => {
    return ( 
        <div>
            <NavBar/>
            <Gallery title={'Gallery'} pics={gallery} />
            <Gallery  pics={gallery3} />
           
        </div>
     );
}
 
export default GalleryPage;