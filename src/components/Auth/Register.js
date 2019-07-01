// import react libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import actions
import { registerActionCreator } from '../../store/actions/registerActions';
import { withRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

// import style
import '../../assets/static/css/register.css';
import 'react-toastify/dist/ReactToastify.css';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmpassword: '',
      errors: {}
    };

  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { email, username, password, confirmpassword } = this.state;
    const { history } = this.props;
    const newUser = {
      email,
      username,
      password,
      confirmpassword
    };
    this.props.registerActionCreator(newUser, history);
  };

  render() {
    const { error } = this.props;
    return (
        <div>
            <ToastContainer autoClose={4000} />
            <section className="signup" >
                <div className="signup-wrapper">
                    <div className="form-group-title">
                        <span className="error" id="error"> {error} </span>
                    </div>
                    <form onSubmit={this.onSubmit} className="signup-form">
                        <div className="signup-flexbox">
                            <div className="email flex-child">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    onChange={this.onChange}
                                    required={true}
                                />
                                <span className="error" id="email-error" />
                            </div>
                            <div className="username flex-child">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    onChange={this.onChange}
                                    required={true}
                                />
                                <span className="error" id="username-error" />
                            </div>
                        </div>
                        <div className="signup-flexbox">
                            <div className="password flex-child">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    onChange={this.onChange}
                                    required={true}
                                />
                                <span className="error" id="password-error" />
                            </div>
                            <div className="confirm-password flex-child">
                                <label htmlFor="confirm-password">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirmpassword"
                                    name="confirmpassword"
                                    onChange={this.onChange}
                                    required={true}
                                />
                                <span className="error" id="pass-error" />
                            </div>
                        </div>
                        <div className="signup-flexbox" id="signup-flexbox-btn">
                            <div className="flex-child div-btn-signup">
                                <button className="btn-signup btn" id="btn-signup"> SignUp </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
  }
}

Register.propTypes = {
  registerActionCreator: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  error: PropTypes.string,
};

Register.defaultProps = {
  error: '',
};
const mapStateToProps = (state) => ({
  error: state.user.signupError
});

export default withRouter(connect(mapStateToProps, { registerActionCreator })(Register));
