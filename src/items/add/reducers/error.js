// @flow

import type { ErrorType } from 'types/error';

import { ITEMS_ADD, ITEMS_ADD_ERROR } from '../constants.js';

import type { ActionType } from '../actions/types';

export type StateType = ?ErrorType;
const initialState = null;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case ITEMS_ADD:
            return initialState;
        case ITEMS_ADD_ERROR:
            return { ...action.payload };
        default:
            return state;
    }
};
