// @flow

import { combineReducers } from 'redux';

import list from './list/';
import add from './add/';

export default combineReducers({
    list,
    add
});

