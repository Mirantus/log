// @flow

import type { ErrorType } from 'types/error';

export type AddActionType = {|
    type: 'ITEMS_ADD'
|}

export type OkActionType = {|
    type: 'ITEMS_ADD_OK'
|}

export type ErrorActionType = {|
    type: 'ITEMS_ADD_ERROR',
    payload: ErrorType
|}

export type ActionType =
    | AddActionType
    | OkActionType
    | ErrorActionType
