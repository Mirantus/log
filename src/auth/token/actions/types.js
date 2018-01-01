// @flow

import type { ErrorType } from 'types/error';

export type TokenCheckActionType = {|
    type: 'TOKEN_CHECK'
|}

export type TokenCheckOkActionType = {|
    type: 'TOKEN_CHECK_OK'
|}

export type TokenCheckErrorActionType = {|
    type: 'TOKEN_CHECK_ERROR',
    payload: ErrorType
|}

export type ActionType =
    | TokenCheckActionType
    | TokenCheckOkActionType
    | TokenCheckErrorActionType
