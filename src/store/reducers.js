// @flow

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import list from '../tweets/list/reducers/';
import add from '../tweets/add/reducers/';
import edit from '../tweets/edit/reducers/';
import remove from '../tweets/remove/reducers/';

const rootReducer = combineReducers({
    form,
    tweets: combineReducers({ list, add, edit, remove }),
});

export default rootReducer;
