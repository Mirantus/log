// @flow

import { combineReducers } from 'redux';

import isFetching from './isFetching';
import data from './data';
import fetchError from './fetchError';
import isSubmitting from './isSubmitting';
import isSubmitted from './isSubmitted';
import editError from './editError';

export default combineReducers({
    isFetching,
    data,
    fetchError,
    isSubmitting,
    isSubmitted,
    editError
});
