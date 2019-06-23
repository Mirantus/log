// @flow

import { combineReducers } from 'redux';

import isSubmitting from './isSubmitting';
import isSubmitted from './isSubmitted';
import error from './error';

export default combineReducers({
    isSubmitting,
    isSubmitted,
    error
});
