// @flow

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import list from '../items/list/reducers/';
import add from '../items/add/reducers/';
import edit from '../items/edit/reducers/';
import remove from '../items/remove/reducers/';
import auth from '../auth/reducers/';

const rootReducer = combineReducers({
    form,
    auth,
    items: combineReducers({ list, add, edit, remove }),
});

export default rootReducer;
