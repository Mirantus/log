// @flow

import { TWEETS_ADD_INIT, TWEETS_ADD, TWEETS_ADD_OK, TWEETS_ADD_ERROR } from '../constants';

import type { ActionType } from '../actions/types';

export type StateType = boolean;
const initialState = false;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case TWEETS_ADD_INIT:
        case TWEETS_ADD:
            return false;
        case TWEETS_ADD_OK:
        case TWEETS_ADD_ERROR:
            return true;
        default:
            return state;
    }
};
