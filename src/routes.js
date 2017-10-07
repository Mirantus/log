// @flow

import React from 'react';
import { Route } from 'react-router-dom';

import Home from 'pages/home';

export default () => (
    <Route exact path="/" component={Home} />
);
