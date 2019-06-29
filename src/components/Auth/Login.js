// import react libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ToastContainer } from 'react-toastify';
// import actions
import { loginActionCreator } from '../../store/actions/loginActions';
import {Link} from 'react-router-dom';

// import style
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {

    constructor (){
        super();
        this.state = {
          username: '',
          password: '',
          errors: {}
        };
    
      }
    
      onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      }
    
      onSubmit = (event) => {
        event.preventDefault();
        const { username, password} = this.state;
        const newUser = {
          username,
          password
        };
        this.props.loginActionCreator(newUser);
      };
    render() {
        return (
            <div>
                <ToastContainer autoClose={4000} />
                <section className="login-page">
                    <div className="container">
                        <div className="sign-text">
                            <h1 className="sign-style">Let Your Voice Count</h1>
                            <h3 className="sign-style-min">
                                <span className="neutral">IReporter</span> 
                            Is A Platform That Enables Citizens Report <br />
                                <span> issues that need government intervention.</span><br />
                                <span>As a user of the platform, you can also view reports</span><br />
                                <span>and interventions created by other users.</span></h3>
                        </div>
                        <div className="float-right">
                            <div className="login-box">
                                <h2 className="login-text">Login</h2>
                                <span className="error" id="error" />
                                <span className="success" id="success" />
                                <form onSubmit={this.onSubmit} className=" login-form">
                                    <div className="input-field">
                                        <input 
                                            type="text" 
                                            name="username" 
                                            id="username" 
                                            className="login-input" 
                                            onChange={this.onChange} 
                                        />
                                    </div>
                                    <div className="input-field">
                                        <input 
                                            type="password" 
                                            name="password" 
                                            id="password" 
                                            className="login-input" 
                                            onChange={this.onChange} 
                                        />
                                    </div>
                                    <div className="forgot-password">
                                        <a href="#">Forgot Password?</a>
                                    </div>
                                    <button 
                                        type="submit" 
                                        id="login-btn"
                                        className="login-btn"
                                    >
                                     Login
                                    </button>
                                    <br />
                                    <p>Not yet Registered? <Link to="/register">Sign Up</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

Login.propTypes = {
    loginActionCreator: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) =>({
    user: state.auth.user,
    token: state.auth.token
})

export default connect(mapStateToProps,{loginActionCreator})(Login);
