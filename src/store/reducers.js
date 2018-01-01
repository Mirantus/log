// @flow

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import list from '../tweets/list/reducers/';
import add from '../tweets/add/reducers/';
import edit from '../tweets/edit/reducers/';
import remove from '../tweets/remove/reducers/';
import auth from '../auth/reducers/';

const rootReducer = combineReducers({
    form,
    auth,
    tweets: combineReducers({ list, add, edit, remove }),
});

export default rootReducer;
