// @flow

import type { ErrorType } from 'types/error';

import { TWEETS_ADD, TWEETS_ADD_ERROR } from '../constants.js';

import type { ActionType } from '../actions/types';

export type StateType = ?ErrorType;
const initialState = null;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case TWEETS_ADD:
            return initialState;
        case TWEETS_ADD_ERROR:
            return { ...action.payload };
        default:
            return state;
    }
};
