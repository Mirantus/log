// @flow

import { TWEET_REMOVE, TWEET_REMOVE_OK, TWEET_REMOVE_ERROR } from '../constants';

import type { ActionType } from '../actions/types';

export type StateType = boolean;
const initialState = false;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case TWEET_REMOVE:
            return true;
        case TWEET_REMOVE_OK:
        case TWEET_REMOVE_ERROR:
            return initialState;
        default:
            return state;
    }
};
