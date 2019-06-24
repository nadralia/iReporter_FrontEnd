import React, { Component } from 'react';

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
                        <a className="login-link" href="login.html">Log In</a>
                        <a className="signup-link" href="signup.html">Sign Up</a>
                    </div>
                </div>
            </header>
        )
    }
}

export default Navbar;