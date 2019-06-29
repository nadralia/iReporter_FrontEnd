// import react libraries
import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
// import components
import Navbar from './Layouts/Navbar';
import Footer from './Layouts/Footer';
import Landing from './Layouts/Landing';
import Register from './Auth/Register';
import Login from './Auth/Login';
import CreateIncident from './Incident/index';

class App extends Component {
    render() {
        return (
            <Router>

                <div>
                    <Navbar />
                    <Switch>
                        <Route exact={true} path="/" component={Landing} />
                        <Route exact={true} path="/register" component={Register} />
                        <Route exact={true} path="/login" component={Login} />
                        <Route exact={true} path="/create" component={CreateIncident} />
                    </Switch>
                    <Footer />
                </div>
                
            </Router>
        );
    }
}
export default App;