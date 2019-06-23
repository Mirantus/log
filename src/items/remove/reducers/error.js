// @flow

import type { ErrorType } from 'types/error';

import { ITEM_REMOVE, ITEM_REMOVE_ERROR } from '../constants.js';

import type { ActionType } from '../actions/types';

export type StateType = ?ErrorType;
const initialState = null;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case ITEM_REMOVE:
            return initialState;
        case ITEM_REMOVE_ERROR:
            return { ...action.payload };
        default:
            return state;
    }
};
