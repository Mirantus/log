// @flow

import { TWEET_FETCH, TWEET_FETCH_OK, TWEET_FETCH_ERROR } from '../constants';

import type { ActionType } from '../actions/types';

export type StateType = boolean;
const initialState = false;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case TWEET_FETCH:
            return true;
        case TWEET_FETCH_OK:
        case TWEET_FETCH_ERROR:
            return initialState;
        default:
            return state;
    }
};
