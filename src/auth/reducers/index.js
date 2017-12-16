// @flow

import { combineReducers } from 'redux';

import login from '../login/reducers/';
import isAuthorized from './isAuthorized';

export default combineReducers({
    isAuthorized,
    login
});
