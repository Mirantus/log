// @flow

import type { ErrorType } from 'types/error';

import { ITEMS_FETCH, ITEMS_FETCH_ERROR } from '../constants';

import type { ActionType } from '../actions/types';

export type StateType = ?ErrorType;
const initialState = null;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case ITEMS_FETCH:
            return initialState;
        case ITEMS_FETCH_ERROR:
            return { ...action.payload };
        default:
            return state;
    }
};
