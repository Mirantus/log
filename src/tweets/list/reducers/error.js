// @flow

import type { ErrorType } from 'types/error';

import { TWEETS_FETCH, TWEETS_FETCH_ERROR } from '../constants';

import type { ActionType } from '../actions/types';

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
