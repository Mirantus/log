// @flow

import { combineReducers } from 'redux';

import isFetching from './isFetching';
import isFetched from './isFetched';

export default combineReducers({
    isFetching,
    isFetched,
});
