import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PublicRoute = ({ component: Component, isAuthenticated, ...rest }) => (

    <Route
        {...rest}
        render={props => (isAuthenticated ? (
            <Redirect to="/" />
    ) : (
        <Component {...props} />
    ))
    }
    />
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.user.username
});

export default connect(mapStateToProps)(PublicRoute);