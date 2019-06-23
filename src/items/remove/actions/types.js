// @flow

import type { ErrorType } from 'types/error';
import type { ItemType } from 'types/item';

export type RemoveActionType = {|
    type: 'ITEM_REMOVE'
|}

export type RemoveOkActionType = {|
    type: 'ITEM_REMOVE_OK',
    payload: ItemType
|}

export type RemoveErrorActionType = {|
    type: 'ITEM_REMOVE_ERROR',
    payload: ErrorType
|}

export type ActionType =
    | RemoveActionType
    | RemoveOkActionType
    | RemoveErrorActionType
