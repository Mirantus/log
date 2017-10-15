// @flow

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import tweets from './tweets/';

const rootReducer = combineReducers({
    form,
    tweets,
});

export default rootReducer;
