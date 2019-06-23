// @flow

import type { ItemType } from 'types/item';

import { ITEM_FETCH, ITEM_FETCH_OK } from '../constants.js';

import type { ActionType } from '../actions/types';

export type StateType = ?ItemType;
const initialState = null;

export default (state:StateType = initialState, action:ActionType):any => {
    switch (action.type) {
        case ITEM_FETCH:
            return initialState;
        case ITEM_FETCH_OK:
            return { ...action.payload };
        default:
            return state;
    }
};
