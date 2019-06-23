// @flow

import { ITEMS_FETCH, ITEMS_FETCH_OK, ITEMS_FETCH_ERROR } from '../constants';

import type { ActionType } from '../actions/types';

export type StateType = boolean;
const initialState = false;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case ITEMS_FETCH:
            return true;
        case ITEMS_FETCH_OK:
        case ITEMS_FETCH_ERROR:
            return initialState;
        default:
            return state;
    }
};
