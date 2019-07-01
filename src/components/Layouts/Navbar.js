import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logoutUser } from '../../store/actions/loginActions';

// import style
import '../../assets/static/css/main.css';

class Navbar extends Component {

    logout = (e) => {
        e.preventDefault();
        const { logout } = this.props;
        logout();
    };

    render() {
        const { user } = this.props;
        return (
            <header>
                <div className="container">
                    <div className="logo">
                        <h1 className="logo-name">i<span className="green-color">Reporter</span></h1>
                    </div>
                    {!user.username && (
                    <div className="nav">
                        <Link className="login-link" to="/login">Log In</Link>
                        <Link className="signup-link" to="/register">Sign Up</Link>
                    </div>
                    )}
                    {user.username && (
                    <div className="nav">
                        <Link className="login-link" to="/profile">{user.username}</Link>
                        <Link 
                            className="signup-link" 
                            to="/login"
                        >
                        Log Out
                        </Link>
                    </div>
                    )}
                </div>
            </header>
        )
    }
}

Navbar.defaultProps = {
    user: {},
  };
  
Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    user: PropTypes.shape({
      username: PropTypes.string,
      email: PropTypes.string,
      token: PropTypes.string,
    })
};

export const mapStateToProps = (state) =>({
    user: state.auth.user,
})
  
export const mapDispatchToProps = dispatch => ({
    logout() { (dispatch(logoutUser())); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);