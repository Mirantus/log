// @flow

import type { TweetType } from 'types/tweet';

import { TWEET_FETCH, TWEET_FETCH_OK } from '../constants.js';

import type { ActionType } from '../actions/types';

export type StateType = ?TweetType;
const initialState = null;

export default (state:StateType = initialState, action:ActionType):any => {
    switch (action.type) {
        case TWEET_FETCH:
            return initialState;
        case TWEET_FETCH_OK:
            return { ...action.payload };
        default:
            return state;
    }
};
