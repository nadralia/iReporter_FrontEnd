import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (

    <Route
        {...rest}
        render={props => (isAuthenticated ? (
            <Component {...props} />
    ) : (
        <Redirect to="/" />
    ))
    }
    />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.user.username
});

export default connect(mapStateToProps)(PrivateRoute);