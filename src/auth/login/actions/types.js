// @flow

import type { ErrorType } from 'types/error';

export type LoginActionType = {|
    type: 'LOGIN'
|}

export type LoginOkActionType = {|
    type: 'LOGIN_OK'
|}

export type LoginErrorActionType = {|
    type: 'LOGIN_ERROR',
    payload: ErrorType
|}

export type ActionType =
    | LoginActionType
    | LoginOkActionType
    | LoginErrorActionType
