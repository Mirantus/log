// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Add from './pages/add';

import store from './store/configure-store';

render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/add" component={Add} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app')
);
