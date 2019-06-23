// @flow

import { ITEM_EDIT, ITEM_EDIT_OK, ITEM_EDIT_ERROR } from '../constants';

import type { ActionType } from '../actions/types';

export type StateType = boolean;
const initialState = false;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case ITEM_EDIT:
            return true;
        case ITEM_EDIT_OK:
        case ITEM_EDIT_ERROR:
            return initialState;
        default:
            return state;
    }
};
