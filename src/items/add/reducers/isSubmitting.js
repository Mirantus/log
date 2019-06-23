// @flow

import { ITEMS_ADD, ITEMS_ADD_OK, ITEMS_ADD_ERROR } from '../constants';

import type { ActionType } from '../actions/types';

export type StateType = boolean;
const initialState = false;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case ITEMS_ADD:
            return true;
        case ITEMS_ADD_OK:
        case ITEMS_ADD_ERROR:
            return initialState;
        default:
            return state;
    }
};
