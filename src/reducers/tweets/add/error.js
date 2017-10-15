// @flow

import { TWEETS_ADD, TWEETS_ADD_ERROR } from 'constants/actions/tweets/add';

import type { ActionType } from 'actions/tweets/add/types';
import type { ErrorType } from 'types/error';

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
