// @flow

import { combineReducers } from 'redux';

import login from '../login/reducers/';
import token from '../token/reducers/';
import isAuthorized from './isAuthorized';

export default combineReducers({
    isAuthorized,
    login,
    token,
});
