// @flow

import type { ErrorType } from 'types/error';

export type AddActionType = {|
    type: 'TWEETS_ADD'
|}

export type OkActionType = {|
    type: 'TWEETS_ADD_OK'
|}

export type ErrorActionType = {|
    type: 'TWEETS_ADD_ERROR',
    payload: ErrorType
|}

export type ActionType =
    | AddActionType
    | OkActionType
    | ErrorActionType
