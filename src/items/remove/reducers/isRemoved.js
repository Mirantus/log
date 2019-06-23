// @flow

import { ITEM_REMOVE, ITEM_REMOVE_OK, ITEM_REMOVE_ERROR } from '../constants';

import type { ActionType } from '../actions/types';

export type StateType = boolean;
const initialState = false;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case ITEM_REMOVE:
            return false;
        case ITEM_REMOVE_OK:
        case ITEM_REMOVE_ERROR:
            return true;
        default:
            return state;
    }
};
