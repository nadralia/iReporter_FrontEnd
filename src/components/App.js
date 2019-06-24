// import react libraries
import React, { Component } from 'react';
// import components
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Landing from '../components/Layouts/Landing';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Landing />
                <Footer />
            </div>
        );
    }
}
export default App;