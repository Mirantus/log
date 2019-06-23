// @flow

import type { ItemType } from 'types/item';

import { ITEM_EDIT_OK } from 'items/edit/constants';
import { ITEM_REMOVE_OK } from 'items/remove/constants';

import type { EditOkActionType } from 'items/edit/actions/types';
import type { RemoveOkActionType } from 'items/remove/actions/types';

import { ITEMS_FETCH, ITEMS_FETCH_OK } from '../constants';

import type { ActionType as FetchActionType } from '../actions/types';

type ActionType =
    | FetchActionType
    | EditOkActionType
    | RemoveOkActionType

export type StateType = Array<ItemType>;
const initialState = [];

// $FlowFixMe
export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case ITEMS_FETCH:
            return initialState;
        case ITEMS_FETCH_OK:
            return [...action.payload];
        case ITEM_EDIT_OK:
            return state.map(
                item => (
                    action.payload && action.payload.id && item.id === action.payload.id
                        // $FlowFixMe
                        ? { ...action.payload }
                        : item
                )
            );
        case ITEM_REMOVE_OK:
            return state.filter(
                item => action.payload && action.payload.id && item.id !== action.payload.id
            );
        default:
            return state;
    }
};
