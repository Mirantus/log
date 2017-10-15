// @flow

import { TWEETS_ADD, TWEETS_ADD_OK, TWEETS_ADD_ERROR } from 'constants/actions/tweets/add';

import type { ActionType } from 'actions/tweets/add/types';

export type StateType = boolean;
const initialState = false;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case TWEETS_ADD:
            return true;
        case TWEETS_ADD_OK:
        case TWEETS_ADD_ERROR:
            return initialState;
        default:
            return state;
    }
};
