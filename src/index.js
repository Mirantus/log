// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from 'store/configure-store';
import Application from './Application';

render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById('app')
);
