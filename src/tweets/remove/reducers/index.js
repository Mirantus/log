// @flow

import { combineReducers } from 'redux';

import isRemoving from './isRemoving';
import isRemoved from './isRemoved';
import error from './error';

export default combineReducers({
    isRemoving,
    isRemoved,
    error,
});
