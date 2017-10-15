// @flow

import type { TweetType } from 'types/tweet';

import { TWEETS_FETCH, TWEETS_FETCH_OK } from '../constants.js';

import type { ActionType } from '../actions/types';

export type StateType = Array<TweetType>;
const initialState = [];

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case TWEETS_FETCH:
            return initialState;
        case TWEETS_FETCH_OK:
            return [...action.payload];
        default:
            return state;
    }
};
