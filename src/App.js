import React from 'react';
import LandingPage from './components/landingPage/LandingPage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import FindPage from './components/Findpage/FindPage';
import SpecialOffer from './components/SpecialOffer/SpecialOffer';
import GalleryPage from './components/Gallery Page/GalleryPage'
import AboutPage from './About Page/AboutPage';



const App = () => {
    return ( 
        <div>
            <Router>
                <Switch>
                <Route path="/" exact component={LandingPage } />
                <Route path='/find' exact component={FindPage} />
                <Route path='/special-offer' exact component={SpecialOffer} />
                <Route path='/gallery' exact component={GalleryPage} />
                <Route path='/about-us' exact component={AboutPage} />
                </Switch>
            </Router>
          
        </div>
     );
}
 
export default App;