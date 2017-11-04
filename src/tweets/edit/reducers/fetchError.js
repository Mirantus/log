// @flow

import type { ErrorType } from 'types/error';

import { TWEET_FETCH, TWEET_FETCH_ERROR } from '../constants';

import type { ActionType } from '../actions/types';

export type StateType = ?ErrorType;
const initialState = null;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case TWEET_FETCH:
            return initialState;
        case TWEET_FETCH_ERROR:
            return { ...action.payload };
        default:
            return state;
    }
};
