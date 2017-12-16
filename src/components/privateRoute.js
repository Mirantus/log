// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthorized, ...rest }) => {
    return (
        <Route
            {...rest}
            render={
                props => (
                    isAuthorized
                        ? <Component {...props} />
                        : (
                            <Redirect
                                to={{
                                    pathname: '/login',
                                    state: { from: props.location }
                                }}
                            />
                        )
                )
            }
        />
    );
};

const mapStateToProps = state => ({ isAuthorized: state.auth.isAuthorized });

export default connect(mapStateToProps, null)(PrivateRoute);
