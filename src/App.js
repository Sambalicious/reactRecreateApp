import React from 'react';
import LandingPage from './components/landingPage/LandingPage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import FindPage from './components/Findpage/FindPage';
import SpecialOffer from './components/SpecialOffer/SpecialOffer';



const App = () => {
    return ( 
        <div>
            <Router>
                <Switch>
                <Route path="/" exact component={LandingPage } />
                <Route path='/find' exact component={FindPage} />
                <Route path='/special-offer' exact component={SpecialOffer} />
                </Switch>
            </Router>
          
        </div>
     );
}
 
export default App;