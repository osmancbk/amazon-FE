import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import Signup from '../pages/Signup';
import Products from '../pages/Products';
import Navbar from '../components/Navbar/Navbar';
//exact
function AppRouter() {

    return (
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/products' component={Products} exact/>
                    <Route path='/signup' component={Signup} />
                    <Route path='/' component={HomePage} />

                </Switch>
            </Router>
        </div>
    );
}
//under '/'
export default AppRouter;
