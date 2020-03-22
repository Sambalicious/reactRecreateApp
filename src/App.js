import React from 'react';

import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import VisitsPage from './components/VisitsPage';
import RecommendedPage from './components/RecommendedPage';
import FunPlace from './components/FunPlace'
import Footer from './components/Footer';
import Home from './components/Home';


const App = () => {
    return ( 
        <div>
        
                <Navbar />
                <Home />
                <VisitsPage />
                <RecommendedPage />
                <FunPlace />
                <Footer />            
        
            
        </div>
     );
}
 
export default App;