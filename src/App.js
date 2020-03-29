import React from 'react';
import LandingPage from './components/landingPage/LandingPage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import FindPage from './components/Findpage/FindPage';



const App = () => {
    return ( 
        <div>
            <Router>
                <Switch>
                <Route path="/" exact component={LandingPage } />
                <Route path='/find' exact component={FindPage} />
                </Switch>
            </Router>
          
        </div>
     );
}
 
export default App;