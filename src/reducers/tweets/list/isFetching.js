// @flow

import { TWEETS_FETCH, TWEETS_FETCH_OK, TWEETS_FETCH_ERROR } from 'constants/actions/tweets/list';

import type { ActionType } from 'actions/tweets/list/types';

export type StateType = boolean;
const initialState = false;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case TWEETS_FETCH:
            return true;
        case TWEETS_FETCH_OK:
        case TWEETS_FETCH_ERROR:
            return initialState;
        default:
            return state;
    }
};
