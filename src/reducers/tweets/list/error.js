// @flow

import { TWEETS_FETCH, TWEETS_FETCH_ERROR } from 'constants/actions/tweets/list';

import type { ActionType } from 'actions/tweets/list/types';
import type { ErrorType } from 'types/error';

export type StateType = ?ErrorType;
const initialState = null;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case TWEETS_FETCH:
            return initialState;
        case TWEETS_FETCH_ERROR:
            return { ...action.payload };
        default:
            return state;
    }
};
