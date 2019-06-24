import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// import style
import '../../assets/static/css/main.css';

class Navbar extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="logo">
                        <h1 className="logo-name">i<span className="green-color">Reporter</span></h1>
                    </div>
                    <div className="nav">
                        <Link className="login-link" to="/login">Log In</Link>
                        <Link className="signup-link" to="/register">Sign Up</Link>
                    </div>
                </div>
            </header>
        )
    }
}

export default Navbar;