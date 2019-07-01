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
import Reports from './Incident/Reports';
import Report from './Incident/Report';
import PrivateRoute from '../routers/PrivateRoute';
import PublicRoute from '../routers/PublicRoute';

class App extends Component {
    render() {
        return (
            <Router>

                <div>
                    <Navbar />
                    <Switch>
                        <Route exact={true} path="/" component={Landing} />
                        <PublicRoute exact={true} path="/register" component={Register} />
                        <PublicRoute exact={true} path="/login" component={Login} />
                        <PrivateRoute path="/create/incident" component={CreateIncident}  />
                        <PrivateRoute exact={true} path="/incident/reports" component={Reports} />
                        <PrivateRoute exact={true} path="/incident/report/:incident_id" component={Report} />
                    </Switch>
                    <Footer />
                </div>
                
            </Router>
        );
    }
}
export default App;