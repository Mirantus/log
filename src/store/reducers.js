// @flow

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import list from '../tweets/list/reducers/';
import add from '../tweets/add/reducers/';

const rootReducer = combineReducers({
    form,
    tweets: combineReducers({ list, add }),
});

export default rootReducer;
