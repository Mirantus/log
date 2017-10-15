// @flow

import React from 'react';
import { Route } from 'react-router-dom';

import Home from 'pages/home';
import Add from 'pages/add';

export default () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={Add} />
    </div>
);
