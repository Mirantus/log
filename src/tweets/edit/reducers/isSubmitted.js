// @flow

import { TWEET_EDIT_INIT, TWEET_EDIT, TWEET_EDIT_OK, TWEET_EDIT_ERROR } from '../constants';

import type { ActionType } from '../actions/types';

export type StateType = boolean;
const initialState = false;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case TWEET_EDIT_INIT:
        case TWEET_EDIT:
            return false;
        case TWEET_EDIT_OK:
        case TWEET_EDIT_ERROR:
            return true;
        default:
            return state;
    }
};
