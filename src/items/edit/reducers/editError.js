// @flow

import type { ErrorType } from 'types/error';

import { ITEM_EDIT, ITEM_EDIT_ERROR } from '../constants.js';

import type { ActionType } from '../actions/types';

export type StateType = ?ErrorType;
const initialState = null;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case ITEM_EDIT:
            return initialState;
        case ITEM_EDIT_ERROR:
            return { ...action.payload };
        default:
            return state;
    }
};
