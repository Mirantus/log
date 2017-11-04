// @flow

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import list from '../tweets/list/reducers/';
import add from '../tweets/add/reducers/';
import edit from '../tweets/edit/reducers/';

const rootReducer = combineReducers({
    form,
    tweets: combineReducers({ list, add, edit }),
});

export default rootReducer;
