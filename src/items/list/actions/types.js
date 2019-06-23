// @flow

import type { ItemType } from 'types/item';
import type { ErrorType } from 'types/error';

export type FetchActionType = {|
    type: 'ITEMS_FETCH'
|}

export type OkActionType = {|
    type: 'ITEMS_FETCH_OK',
    payload: Array<ItemType>
|}

export type ErrorActionType = {|
    type: 'ITEMS_FETCH_ERROR',
    payload: ErrorType
|}

export type ActionType =
    | FetchActionType
    | OkActionType
    | ErrorActionType
