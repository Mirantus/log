// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from 'store/configure-store';
import PrivateRoute from 'components/privateRoute';
import Home from 'pages/home';
import Add from 'pages/add';
import Edit from 'pages/edit';
import Login from 'pages/login';

render(
    <Provider store={store}>
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/add" component={Add} />
                    <PrivateRoute path="/edit/:id(\d+)" component={Edit} />
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('app')
);
