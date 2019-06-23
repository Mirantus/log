// @flow

import { ITEM_FETCH, ITEM_FETCH_OK, ITEM_FETCH_ERROR } from '../constants';

import type { ActionType } from '../actions/types';

export type StateType = boolean;
const initialState = false;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case ITEM_FETCH:
            return true;
        case ITEM_FETCH_OK:
        case ITEM_FETCH_ERROR:
            return initialState;
        default:
            return state;
    }
};
