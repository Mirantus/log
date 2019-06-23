// @flow

import type { ItemType } from 'types/item';
import type { ErrorType } from 'types/error';

export type FetchActionType = {|
    type: 'ITEM_FETCH',
    payload: Number
|}

export type FetchOkActionType = {|
    type: 'ITEM_FETCH_OK',
    payload: ItemType
|}

export type FetchErrorActionType = {|
    type: 'ITEM_FETCH_ERROR',
    payload: ErrorType
|}

export type EditActionType = {|
    type: 'ITEM_EDIT'
|}

export type EditOkActionType = {|
    type: 'ITEM_EDIT_OK',
    payload: ItemType
|}

export type EditErrorActionType = {|
    type: 'ITEM_EDIT_ERROR',
    payload: ErrorType
|}

export type ActionType =
    | FetchActionType
    | FetchOkActionType
    | FetchErrorActionType
    | EditActionType
    | EditOkActionType
    | EditErrorActionType
