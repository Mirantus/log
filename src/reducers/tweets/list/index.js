// @flow

import { combineReducers } from 'redux';

import data from './data';
import error from './error';
import isFetching from './isFetching';

export default combineReducers({
    data,
    error,
    isFetching,
});
